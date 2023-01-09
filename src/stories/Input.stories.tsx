import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input, { InputClear } from "@/src/components/common/Input";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
const TemplateClear: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState<string>("");
  return (
    <InputClear
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue("")}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "TextField",
};
export const Clear = TemplateClear.bind({});
Clear.args = {
  placeholder: "TextField",
};
