import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "@/src/components/common/Input";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "TextField",
};
