import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Raised = Template.bind({});
Raised.args = {
  label: "Press me",
  variant: "raised",
  size: "normal",
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Press me",
  variant: "outlined",
  size: "normal",
};

export const Flat = Template.bind({});
Flat.args = {
  label: "Press me",
  variant: "flat",
  size: "normal",
};
