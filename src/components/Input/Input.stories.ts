import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  title: "Example/Button",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputWithOutData: Story = {
  args: {
    onChange: () => console.log("hola"),
    label: "input",
    placeholder: "1,2,3",
    value: "",
  },
};

export const InputWitData: Story = {
  args: {
    onChange: () => console.log("hola"),
    label: "input",
    placeholder: "1,2,3",
    value: "data",
  },
};
