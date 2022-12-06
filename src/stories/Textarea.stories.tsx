import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Textarea from "@/src/components/common/Textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  const [value, setValue] = useState<string>();
  return (
    <Textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Textarea Component PlaceHolder",
  maxLength: 50,
};
