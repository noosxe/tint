{
  description = "Development environment for tint";

  inputs = {
    # The exact nixpkgs revision (and therefore the exact node/pnpm builds
    # below) is pinned in flake.lock. Run `nix flake update` to bump it.
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      forAllSystems = nixpkgs.lib.genAttrs systems;
    in
    {
      devShells = forAllSystems (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};

          # --- Pinned toolchain (resolved versions at the locked revision) ---
          nodejs = pkgs.nodejs_24; # Node.js 24.20.0
          pnpm = pkgs.pnpm_11; # pnpm 11.27.0
        in
        {
          default = pkgs.mkShell {
            name = "tint-devshell";

            packages = [
              nodejs
              pnpm
              pkgs.git # needed by husky / lint-staged
            ];

            shellHook = ''
              echo "▸ tint devshell: node $(node --version) · pnpm $(pnpm --version)"
            '';
          };
        });
    };
}
