import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "@/src/components/common/Select";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<string>();
  return (
    <Select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Select Component PlaceHolder",
  options: {
    optionA: "valueA",
    optionB: "valueB",
    optionC: "valueC",
    optionD: "valueD",
  },
};
