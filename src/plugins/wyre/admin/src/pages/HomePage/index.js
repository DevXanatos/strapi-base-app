/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from "react";
import { LoadingIndicatorPage } from "@strapi/helper-plugin";
import kycdataRequests from "../../api/wyre";
// import PropTypes from 'prop-types';
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { Flex, Button, TextInput, Box } from "@strapi/design-system";
import { CryptoJS } from "crypto-js";
// TODO: create wyre-API-calls in admin/src/api/xyz.js & import here
//console.log("env : ", process.env);

const HomePage = () => {
  const [returnHome, setReturnHome] = useState(false);
  const [wyreId, setWyreId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [isNewRecord, setIsNewRecord] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      if (isLoading === false) setIsLoading(true);
      const allData = await kycdataRequests.find();

      if (allData) {
        if (allData.id) setWyreId(allData.id);
        if (allData.firstName) setFirstName(allData.firstName);
        if (allData.lastName) setLastName(allData.lastName);
        if (allData.email) setEmail(allData.email);
        if (allData.phone) setPhone(allData.phone);
        if (allData.birthday) setBirthday(allData.birthday);
        if (allData.street1) setStreet1(allData.street1);
        if (allData.street2) setStreet2(allData.street2);
        if (allData.city) setCity(allData.city);
        if (allData.state) setState(allData.state);
        if (allData.postalCode) setPostalCode(allData.postalCode);
        if (allData.country) setCountry(allData.country);
        setIsNewRecord(false);
      }
    } catch (e) {
      console.log("error", e);
    }
    setIsLoading(false);
  };

  useEffect(async () => {
    await fetchData();
  }, []);

  async function deleteKycData(id) {
    //alert(`Delete ID: ${id}`);
    if (!isNewRecord) {
      await kycdataRequests.deleteKycData(id);
      setWyreId("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setBirthday("");
      setStreet1("");
      setStreet2("");
      setCity("");
      setState("");
      setPostalCode("");
      setCountry("");
      setIsNewRecord(true);
    }
  }

  async function updateData(id, data) {
    // create or update
    //alert(`Update/Add ID: ${id} and Data: ${data}`);
    if (isNewRecord) {
      await kycdataRequests.addKycData(data);
      await fetchData();
    } else {
      await kycdataRequests.editKycData(id, data);
      await fetchData();
    }
  }

  if (isLoading) return <LoadingIndicatorPage />;

  return (
    <>
      <BaseHeaderLayout title="Wyre Plugin" subtitle="Your KYC data." as="h2" />

      <ContentLayout as="form">
        <>
          <Box padding={5}>
            <TextInput
              placeholder="enter your first name"
              label="First Name"
              name="firstName"
              error={firstName.length > 100 ? "Content is too long" : undefined}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></TextInput>
          </Box>
          <Box padding={5}>
            <TextInput
              placeholder="enter your last name"
              label="Last Name"
              name="lastName"
              error={lastName.length > 100 ? "Content is too long" : undefined}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></TextInput>
          </Box>
          <Box padding={5}>
            <TextInput
              placeholder="enter your email"
              label="Email"
              name="email"
              error={email.length > 100 ? "email is too long" : undefined}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextInput>
          </Box>
          <Box padding={5}>
            <TextInput
              placeholder="enter your phone number"
              label="Phone"
              name="phone"
              error={phone.length > 20 ? "phone number is too long" : undefined}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></TextInput>
          </Box>
          <Box padding={5}>
            <TextInput
              placeholder="enter your birthday"
              label="Birthday"
              name="birthday"
              error={birthday.length > 10 ? "Content is too long" : undefined}
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            ></TextInput>
          </Box>
          <Box padding={5}>
            <TextInput
              placeholder="enter your street"
              label="Street1"
              name="street1"
              error={street1.length > 100 ? "Content is too long" : undefined}
              value={street1}
              onChange={(e) => setStreet1(e.target.value)}
            ></TextInput>
          </Box>
          <Box padding={5}>
            <TextInput
              placeholder="enter your additional information"
              label="Street2"
              name="street2"
              error={street2.length > 100 ? "Content is too long" : undefined}
              value={street2}
              onChange={(e) => setStreet2(e.target.value)}
            ></TextInput>
          </Box>
          <Box padding={5}>
            <TextInput
              placeholder="enter your city"
              label="City"
              name="city"
              error={city.length > 100 ? "Content is too long" : undefined}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></TextInput>
          </Box>
          <Box padding={5}>
            <TextInput
              placeholder="enter your state"
              label="State"
              name="state"
              error={state.length > 100 ? "Content is too long" : undefined}
              value={state}
              onChange={(e) => setState(e.target.value)}
            ></TextInput>
          </Box>
          <Box padding={5}>
            <TextInput
              placeholder="enter your postal code"
              label="Postal Code"
              name="postalCode"
              error={postalCode.length > 10 ? "Content is too long" : undefined}
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            ></TextInput>
          </Box>
          <Box padding={5}>
            <TextInput
              placeholder="enter your country"
              label="Country"
              name="country"
              error={country.length > 100 ? "Content is too long" : undefined}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></TextInput>
          </Box>

          <Box padding={5}>
            <Flex justifyContent="space-evenly">
              <Button onClick={() => setReturnHome(true)} variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={() =>
                  createWyreUser({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    birthday: birthday,
                    street1: street1,
                    street2: street2,
                    city: city,
                    state: state,
                    postalCode: postalCode,
                    country: country,
                  })
                }
                variant="tertiary"
              >
                Create Wyre User
              </Button>
              <Button onClick={() => deleteKycData(wyreId)} variant="danger">
                Delete
              </Button>
              <Button
                onClick={() =>
                  updateData(wyreId, {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    birthday: birthday,
                    street1: street1,
                    street2: street2,
                    city: city,
                    state: state,
                    postalCode: postalCode,
                    country: country,
                  })
                }
                type="submit"
              >
                Submit
              </Button>
            </Flex>
          </Box>
        </>
      </ContentLayout>
    </>
  );
};

export default memo(HomePage);
