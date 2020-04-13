import React, { useRef, useMemo } from 'react';
import { Map, Marker, GoogleApiWrapper, Circle } from 'google-maps-react';
import PropTypes from 'prop-types';

export const GeoDistanceForm = ({ form, , google }) => {
  const {
    getFieldDecorator,
    getFieldValue,
    setFieldsValue,
    resetFields,
  } = form;
  
  return (
    <div>
    </div>
  );
};

GeoDistanceForm.propTypes = {
  form: PropTypes.shape({}).isRequired,
  google: PropTypes.shape({}).isRequired,
};

GeoDistanceForm.defaultProps = {
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCbdYlBtAHMkrKyv4jh8vYqWRT_d6AQfas", // google maps key
  libraries: ['places'],
})(GeoDistanceForm);
