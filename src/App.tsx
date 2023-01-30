import React, { ChangeEvent } from "react";
import { Space } from "antd";
import {
  ArrowLeftOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Wrapper from "./components/core/Wrapper";
import Input from "./components/core/Input/Text";
import Textarea from "./components/core/Textarea";
import Button from "./components/core/Button/Basic";
import { AddonProps, ChangeTypes } from "./components/types";
import { LabeledValue } from "antd/es/select";
import IconButton from "./components/core/Button/Icon";
import SortIcon from "./components/core/Icons/SortIcon";

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
  const shape = "default";
  const type = "default";
  const htmlType = "button";
  const danger = true;
  const iconBefore = <PlusOutlined />;
  const iconAfter = <ArrowLeftOutlined />;

  //Icons Button
  const icon = <SortIcon />;

  const handleChange = (e: ChangeEvent<ChangeTypes>): void => {
    console.log(e.target.value);
  };

  const handleSelect = (e: string | number | LabeledValue): void =>
    console.log(e);

  const handleClick = (): void => {
    console.log("Button was clicked!");
  };

  return (
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
            shape={shape}
            mode={mode}
            type={"default"}
            htmlType={htmlType}
            disabled={disabled}
            danger={danger}
            iconBefore={iconBefore}
            iconAfter={iconAfter}
            onClick={handleClick}
          >
            Create New
          </Button>
          <IconButton
            mode={mode}
            disabled={disabled}
            icon={icon}
            onClick={handleClick}
          />
        </Space>
      </Wrapper>
    </Wrapper>
  );
}

export default App;
