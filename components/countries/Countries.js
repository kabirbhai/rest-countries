import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v2/all");
      const data = await res.json();
      setCountries(data);
      setSearched(data);
    };
    fetchData();
  }, []);

  const handleSearch = (text) => {
    const filtered = countries.filter((country) => country.name.includes(text));
    setSearched(filtered);
  };

  return (
    <View>
      <Text style={{ textAlign: "center", color: "blue", fontSize: "2rem" }}>
        All countries {searched.length}
      </Text>
      <TextInput onChangeText={handleSearch} style={styles.input}></TextInput>
      <ScrollView style={{ padding: "10px" }}>
        {searched.map((country) => (
          <Country key={country.name} country={country}></Country>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
