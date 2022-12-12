import { SearchOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useForm, useWatch } from "antd/es/form/Form";
import { useEffect } from "react";
import { LocationFormItem, LocationInput } from "./styled";

type Props = {
  searchZipCode: number | { lat: number; lon: number };
  isLoading: boolean;
  onZipCodeChange(zipCode: number): void;
};

const ZipCodeInput: React.FC<Props> = ({
  searchZipCode,
  isLoading,
  onZipCodeChange,
}) => {
  const [form] = useForm();
  const formZipCode = useWatch<number>("zipCode", form);

  useEffect(() => {
    if (!isLoading) {
      form.setFieldsValue({ zipCode: null }); //clears input when data has been retrieved/errored
    }
  }, [isLoading]);

  return (
    <Form
      form={form}
      initialValues={{
        zipCode: searchZipCode,
      }}
    >
      <LocationFormItem name="zipCode" style={{position:'relative'}}>
        <LocationInput
          maxLength={5}
          placeholder="Enter zip code"
          suffix={<SearchOutlined/>}
          onKeyDown={(e) => {
            if (isLoading) {
              e.preventDefault(); //prevent calling API during data retrieval
            }
            if (e.code === "Enter") { //would be nice to be able to click to search as well, for now this will do.
              onZipCodeChange(formZipCode);
            }
          }}
        />
      </LocationFormItem>
    </Form>
  );
};

export default ZipCodeInput;
