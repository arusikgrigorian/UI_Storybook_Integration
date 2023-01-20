import React, { ChangeEvent } from "react";
import { ConfigProvider, Space } from "antd";
import {
  ArrowRightOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Wrapper from "./components/core/Wrapper";
import Input from "./components/core/Input/Text";
import Textarea from "./components/core/Textarea";
import Button from "./components/core/Button";
import { AddonProps, ChangeTypes } from "./components/types";
import { LabeledValue } from "antd/es/select";

function App(props: AddonProps) {
  const { options } = props;

  //Input
  const size = "middle";
  const mode = "light";
  const inputState = "default";
  const disabled = false;
  const withPrefixTooltip = true;
  const prefixTooltipTitle = "Prefix Tooltip Title";
  const prefix = <ExclamationCircleOutlined />;
  const placeholder = "Enter your data";
  const withSuffixTooltip = true;
  const suffixTooltipTitle = "Suffix Tooltip Title";
  const suffix = <ExclamationCircleOutlined />;
  const withAddonAfter = true;
  const addonAfterOptions = options;
  const addonAfterDefaultOption = options?.[0].value;
  const showTooltipArrow = true;

  //Button
  const type = "primary";
  const iconBefore = <PlusOutlined />;
  const iconAfter = <ArrowRightOutlined />;

  const handleChange = (e: ChangeEvent<ChangeTypes>): void => {
    console.log(e.target.value);
  };

  const handleSelect = (e: string | number | LabeledValue) => console.log(e);

  return (
    <ConfigProvider
      theme={{
        token: {
          // colorPrimary: theme.colors.neutral["gray-6"],
          // colorText: theme.colors.neutral["gray-9"],
          // lineWidth: 1,
          // lineType: lineType,
          // colorBorder: theme.colors.neutral["gray-2"],
          // borderRadius: 8,
          // colorPrimaryHover: theme.colors.neutral["gray-7"],
          // controlOutline: "none",
          // colorBgContainer: theme.colors.neutral["gray-2"],
        },
      }}
    >
      <Wrapper mode={mode}>
        <Wrapper mode={mode} flex_direction="column" width="50%">
          <Space direction="vertical" style={{ width: "100%" }}>
            <Input
              size={size}
              mode={mode}
              state={inputState}
              disabled={disabled}
              withPrefixTooltip={withPrefixTooltip}
              prefixTooltipTitle={prefixTooltipTitle}
              prefix={prefix}
              placeholder={placeholder}
              withSuffixTooltip={withSuffixTooltip}
              suffixTooltipTitle={suffixTooltipTitle}
              suffix={suffix}
              showTooltipArrow={showTooltipArrow}
              withAddonAfter={withAddonAfter}
              options={addonAfterOptions}
              addonAfterDefaultOption={addonAfterDefaultOption}
              onChange={handleChange}
              onOptionSelect={handleSelect}
            />
            <Textarea
              mode={mode}
              state={inputState}
              disabled={disabled}
              placeholder={placeholder}
              onChange={handleChange}
            />
            <Button
              size={size}
              mode={mode}
              type={type}
              disabled={disabled}
              iconBefore={iconBefore}
              iconAfter={iconAfter}
            >
              Create New
            </Button>
          </Space>
        </Wrapper>
      </Wrapper>
    </ConfigProvider>
  );
}
export default App;
