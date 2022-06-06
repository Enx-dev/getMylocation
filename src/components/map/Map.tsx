import React from "react";
import L from "leaflet";
import "leaflet/dist/images/marker-shadow.png";
import iconRetinaUrl from "../../images/download-icon-svg+location+locator+map+navigation+user+user+location+icon-1320184910707394703_0.svg";
import iconUrl from "../../images/download-icon-svg+location+locator+map+navigation+user+user+location+icon-1320184910707394703_0.svg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
type Props = {
  data: {
    location: {
      lat: number;
      lng: number;
    };
  };
  isFetching: boolean;
};

const override = css({
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  margin: "auto",
});

const Map = ({ data, isFetching }: Props) => {
  let iconPerson;

  if (!isFetching) {
    iconPerson = new L.Icon({
      iconUrl,
      iconRetinaUrl,
      iconAnchor: [data.location.lat, data.location.lng],
      popupAnchor: [data.location.lat, data.location.lng],
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(60, 75),
      className: "leaflet-div-icon",
      attribution: "hey",
    });
  }

  return (
    <section className='w-full map z-0 relative' id='Map'>
      {isFetching ? (
        <ClipLoader css={override} />
      ) : (
        <MapContainer
          center={[data.location.lat, data.location.lng]}
          zoom={30}
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker
            icon={iconPerson}
            position={[data.location.lat, data.location.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </section>
  );
};

export default Map;
