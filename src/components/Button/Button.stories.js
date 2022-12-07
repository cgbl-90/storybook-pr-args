import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { type: "string", defaultValue: "Button" },
    style: { type: "string", defaultValue: "primary" },
  },
};

const Template = (args) => <Button {...args} />;

export const BtnWarning = Template.bind({});
BtnWarning.args = {
  label: "Stop",
  style: "warning",
};

export const BtnSuccess = Template.bind({});
BtnSuccess.args = {
  label: "Save",
  style: "primary",
};

export const BtnStandard = Template.bind({});
BtnStandard.args = {
  label: "More",
  style: "secondary",
};

export const BtnAttention = Template.bind({});
BtnAttention.args = {
  label: "Go",
  style: "attention",
};
