import { TCoordinates } from "../../services/weather/types";
import { Button, ButtonContents, LocationIcon } from "./styled";

type Props = {
  disabled: boolean;
  onCoordinatesRetrieved(coordinates?: TCoordinates): void;
};

const CurrentLocationButton: React.FC<Props> = ({
  disabled,
  onCoordinatesRetrieved,
}) => {
  const success = (pos: any) => {
    const crd = pos.coords;
    onCoordinatesRetrieved({
      lat: crd.latitude,
      lon: crd.longitude,
    });
  };

  const error = (error: any) => {
    console.warn("Client coordinates error:", {
      code: error.code,
      message: error.message,
    });
    onCoordinatesRetrieved(); //didn't find the time but this function should pass an optional "errored" parameter to inform the parent what occured.
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, {
      //options improve the speed and functionality of getting the user location if permitted 
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: Infinity,
    });
  };

  return (
    <Button
      type="link"
      disabled={disabled}
      onClick={() => getCurrentLocation()}
    >
      <ButtonContents>
        or click here to use current location
        <LocationIcon />
      </ButtonContents>
    </Button>
  );
};

export default CurrentLocationButton;
