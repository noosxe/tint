import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Raised: Story = {
  args: {
    label: "Press me",
    variant: "raised",
    size: "normal",
  },
};

export const Outlined: Story = {
  args: {
    label: "Press me",
    variant: "outlined",
    size: "normal",
  },
};

export const Flat: Story = {
  args: {
    label: "Press me",
    variant: "flat",
    size: "normal",
  },
};
