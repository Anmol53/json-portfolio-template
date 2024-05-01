"use client";
import { useEffect, useState } from "react";
import Header from "./components/header";
import Section from "./components/section";
import Footer from "./components/footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, presetThemes } from "./themeConfig";

export default function Home() {
  const [profileData, setProfileData] = useState(undefined);
  const [theme, setTheme] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  // check and reset theme
  const themeCheck = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  useEffect(() => {
    themeCheck();
    fetch("data/profile.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const choosenTheme = data.options?.theme;
        if (choosenTheme === "custom") {
          setTheme(data.theme);
        } else if (choosenTheme in presetThemes) {
          setTheme(presetThemes[choosenTheme]);
        } else {
          setTheme(presetThemes.default);
        }
        setProfileData(data);
      });
  }, []);

  return profileData ? (
    <ThemeProvider
      theme={{
        ...(darkMode ? theme.dark : theme.default),
        isDarkMode: darkMode,
      }}
    >
      <head>
        <link
          href={`https://fonts.googleapis.com/css2?family=${
            darkMode ? theme.dark.fontFamily : theme.default.fontFamily
          }:wght@400;700&display=swap`}
          rel="stylesheet"
        ></link>
      </head>
      <GlobalStyles />
      <Header
        brand={profileData.brand}
        sections={profileData.sections?.map((section) => section.name)}
        themeTogglerOpted={
          profileData.options?.darkMode !== undefined
            ? profileData.options.darkMode
            : true
        }
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {profileData.sections?.map((section, idx) => (
        <Section
          data={section}
          $index={idx}
          key={`section_${section.name}_${idx}`}
        />
      ))}
      <Footer appName={profileData.appName} data={profileData.footer} />
    </ThemeProvider>
  ) : (
    <div>Site data not available.</div>
  );
}
