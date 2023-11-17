import logo from './logo.svg';
import './App.css';
import React from 'react';



function App() {

  //My Code
  // Provided dataset
  const dataset = [
    {
      "Alcohol": 1,
      "Malic Acid": 14.23,
      "Ash": 1.71,
      "Alcalinity of ash": 2.43,
      "Magnesium": 15.6,
      "Total phenols": 127,
      "Flavanoids": 2.8,
      "Nonflavanoid phenols": 3.06,
      "Proanthocyanins": ".28",
      "Color intensity": 2.29,
      "Hue": 5.64,
      "OD280/OD315 of diluted wines": 1.04,
      "Unknown": 3.92
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.2,
      "Ash": 1.78,
      "Alcalinity of ash": 2.14,
      "Magnesium": 11.2,
      "Total phenols": 100,
      "Flavanoids": 2.65,
      "Nonflavanoid phenols": 2.76,
      "Proanthocyanins": ".26",
      "Color intensity": 1.28,
      "Hue": 4.38,
      "OD280/OD315 of diluted wines": 1.05,
      "Unknown": 3.4
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.16,
      "Ash": 2.36,
      "Alcalinity of ash": 2.67,
      "Magnesium": 18.6,
      "Total phenols": 101,
      "Flavanoids": 2.8,
      "Nonflavanoid phenols": 3.24,
      "Proanthocyanins": ".3",
      "Color intensity": 2.81,
      "Hue": 5.68,
      "OD280/OD315 of diluted wines": 1.03,
      "Unknown": 3.17
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.37,
      "Ash": 1.95,
      "Alcalinity of ash": 2.5,
      "Magnesium": 16.8,
      "Total phenols": 113,
      "Flavanoids": 3.85,
      "Nonflavanoid phenols": 3.49,
      "Proanthocyanins": ".24",
      "Color intensity": 2.18,
      "Hue": 7.8,
      "OD280/OD315 of diluted wines": ".86",
      "Unknown": 3.45
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.24,
      "Ash": 2.59,
      "Alcalinity of ash": 2.87,
      "Magnesium": 21,
      "Total phenols": 118,
      "Flavanoids": 2.8,
      "Nonflavanoid phenols": 2.69,
      "Proanthocyanins": ".39",
      "Color intensity": 1.82,
      "Hue": 4.32,
      "OD280/OD315 of diluted wines": 1.04,
      "Unknown": 2.93
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.2,
      "Ash": 1.76,
      "Alcalinity of ash": 2.45,
      "Magnesium": 15.2,
      "Total phenols": 112,
      "Flavanoids": 3.27,
      "Nonflavanoid phenols": 3.39,
      "Proanthocyanins": ".34",
      "Color intensity": 1.97,
      "Hue": 6.75,
      "OD280/OD315 of diluted wines": 1.05,
      "Unknown": 2.85
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.39,
      "Ash": 1.87,
      "Alcalinity of ash": 2.45,
      "Magnesium": 14.6,
      "Total phenols": 96,
      "Flavanoids": 2.5,
      "Nonflavanoid phenols": 2.52,
      "Proanthocyanins": ".3",
      "Color intensity": 1.98,
      "Hue": 5.25,
      "OD280/OD315 of diluted wines": 1.02,
      "Unknown": 3.58
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.06,
      "Ash": 2.15,
      "Alcalinity of ash": 2.61,
      "Magnesium": 17.6,
      "Total phenols": 121,
      "Flavanoids": 2.6,
      "Nonflavanoid phenols": 2.51,
      "Proanthocyanins": ".31",
      "Color intensity": 1.25,
      "Hue": 5.05,
      "OD280/OD315 of diluted wines": 1.06,
      "Unknown": 3.58
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.83,
      "Ash": 1.64,
      "Alcalinity of ash": 2.17,
      "Magnesium": 14,
      "Total phenols": 97,
      "Flavanoids": 2.8,
      "Nonflavanoid phenols": 2.98,
      "Proanthocyanins": ".29",
      "Color intensity": 1.98,
      "Hue": 5.2,
      "OD280/OD315 of diluted wines": 1.08,
      "Unknown": 2.85
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.86,
      "Ash": 1.35,
      "Alcalinity of ash": 2.27,
      "Magnesium": 16,
      "Total phenols": 98,
      "Flavanoids": 2.98,
      "Nonflavanoid phenols": 3.15,
      "Proanthocyanins": ".22",
      "Color intensity": 1.85,
      "Hue": 7.22,
      "OD280/OD315 of diluted wines": 1.01,
      "Unknown": 3.55
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.1,
      "Ash": 2.16,
      "Alcalinity of ash": 2.3,
      "Magnesium": 18,
      "Total phenols": 105,
      "Flavanoids": 2.95,
      "Nonflavanoid phenols": 3.32,
      "Proanthocyanins": ".22",
      "Color intensity": 2.38,
      "Hue": 5.75,
      "OD280/OD315 of diluted wines": 1.25,
      "Unknown": 3.17
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.12,
      "Ash": 1.48,
      "Alcalinity of ash": 2.32,
      "Magnesium": 16.8,
      "Total phenols": 95,
      "Flavanoids": 2.2,
      "Nonflavanoid phenols": 2.43,
      "Proanthocyanins": ".26",
      "Color intensity": 1.57,
      "Hue": 5,
      "OD280/OD315 of diluted wines": 1.17,
      "Unknown": 2.82
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.75,
      "Ash": 1.73,
      "Alcalinity of ash": 2.41,
      "Magnesium": 16,
      "Total phenols": 89,
      "Flavanoids": 2.6,
      "Nonflavanoid phenols": 2.76,
      "Proanthocyanins": ".29",
      "Color intensity": 1.81,
      "Hue": 5.6,
      "OD280/OD315 of diluted wines": 1.15,
      "Unknown": 2.9
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.75,
      "Ash": 1.73,
      "Alcalinity of ash": 2.39,
      "Magnesium": 11.4,
      "Total phenols": 91,
      "Flavanoids": 3.1,
      "Nonflavanoid phenols": 3.69,
      "Proanthocyanins": ".43",
      "Color intensity": 2.81,
      "Hue": 5.4,
      "OD280/OD315 of diluted wines": 1.25,
      "Unknown": 2.73
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.38,
      "Ash": 1.87,
      "Alcalinity of ash": 2.38,
      "Magnesium": 12,
      "Total phenols": 102,
      "Flavanoids": 3.3,
      "Nonflavanoid phenols": 3.64,
      "Proanthocyanins": ".29",
      "Color intensity": 2.96,
      "Hue": 7.5,
      "OD280/OD315 of diluted wines": 1.2,
      "Unknown": 3
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.63,
      "Ash": 1.81,
      "Alcalinity of ash": 2.7,
      "Magnesium": 17.2,
      "Total phenols": 112,
      "Flavanoids": 2.85,
      "Nonflavanoid phenols": 2.91,
      "Proanthocyanins": ".3",
      "Color intensity": 1.46,
      "Hue": 7.3,
      "OD280/OD315 of diluted wines": 1.28,
      "Unknown": 2.88
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.3,
      "Ash": 1.92,
      "Alcalinity of ash": 2.72,
      "Magnesium": 20,
      "Total phenols": 120,
      "Flavanoids": 2.8,
      "Nonflavanoid phenols": 3.14,
      "Proanthocyanins": ".33",
      "Color intensity": 1.97,
      "Hue": 6.2,
      "OD280/OD315 of diluted wines": 1.07,
      "Unknown": 2.65
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.83,
      "Ash": 1.57,
      "Alcalinity of ash": 2.62,
      "Magnesium": 20,
      "Total phenols": 115,
      "Flavanoids": 2.95,
      "Nonflavanoid phenols": 3.4,
      "Proanthocyanins": ".4",
      "Color intensity": 1.72,
      "Hue": 6.6,
      "OD280/OD315 of diluted wines": 1.13,
      "Unknown": 2.57
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.19,
      "Ash": 1.59,
      "Alcalinity of ash": 2.48,
      "Magnesium": 16.5,
      "Total phenols": 108,
      "Flavanoids": 3.3,
      "Nonflavanoid phenols": 3.93,
      "Proanthocyanins": ".32",
      "Color intensity": 1.86,
      "Hue": 8.7,
      "OD280/OD315 of diluted wines": 1.23,
      "Unknown": 2.82
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.64,
      "Ash": 3.1,
      "Alcalinity of ash": 2.56,
      "Magnesium": 15.2,
      "Total phenols": 116,
      "Flavanoids": 2.7,
      "Nonflavanoid phenols": 3.03,
      "Proanthocyanins": ".17",
      "Color intensity": 1.66,
      "Hue": 5.1,
      "OD280/OD315 of diluted wines": ".96",
      "Unknown": 3.36
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.06,
      "Ash": 1.63,
      "Alcalinity of ash": 2.28,
      "Magnesium": 16,
      "Total phenols": 126,
      "Flavanoids": 3,
      "Nonflavanoid phenols": 3.17,
      "Proanthocyanins": ".24",
      "Color intensity": 2.1,
      "Hue": 5.65,
      "OD280/OD315 of diluted wines": 1.09,
      "Unknown": 3.71
    },
    {
      "Alcohol": 1,
      "Malic Acid": 12.93,
      "Ash": 3.8,
      "Alcalinity of ash": 2.65,
      "Magnesium": 18.6,
      "Total phenols": 102,
      "Flavanoids": 2.41,
      "Nonflavanoid phenols": 2.41,
      "Proanthocyanins": ".25",
      "Color intensity": 1.98,
      "Hue": 4.5,
      "OD280/OD315 of diluted wines": 1.03,
      "Unknown": 3.52
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.71,
      "Ash": 1.86,
      "Alcalinity of ash": 2.36,
      "Magnesium": 16.6,
      "Total phenols": 101,
      "Flavanoids": 2.61,
      "Nonflavanoid phenols": 2.88,
      "Proanthocyanins": ".27",
      "Color intensity": 1.69,
      "Hue": 3.8,
      "OD280/OD315 of diluted wines": 1.11,
      "Unknown": 4
    },
    {
      "Alcohol": 1,
      "Malic Acid": 12.85,
      "Ash": 1.6,
      "Alcalinity of ash": 2.52,
      "Magnesium": 17.8,
      "Total phenols": 95,
      "Flavanoids": 2.48,
      "Nonflavanoid phenols": 2.37,
      "Proanthocyanins": ".26",
      "Color intensity": 1.46,
      "Hue": 3.93,
      "OD280/OD315 of diluted wines": 1.09,
      "Unknown": 3.63
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.5,
      "Ash": 1.81,
      "Alcalinity of ash": 2.61,
      "Magnesium": 20,
      "Total phenols": 96,
      "Flavanoids": 2.53,
      "Nonflavanoid phenols": 2.61,
      "Proanthocyanins": ".28",
      "Color intensity": 1.66,
      "Hue": 3.52,
      "OD280/OD315 of diluted wines": 1.12,
      "Unknown": 3.82
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.05,
      "Ash": 2.05,
      "Alcalinity of ash": 3.22,
      "Magnesium": 25,
      "Total phenols": 124,
      "Flavanoids": 2.63,
      "Nonflavanoid phenols": 2.68,
      "Proanthocyanins": ".47",
      "Color intensity": 1.92,
      "Hue": 3.58,
      "OD280/OD315 of diluted wines": 1.13,
      "Unknown": 3.2
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.39,
      "Ash": 1.77,
      "Alcalinity of ash": 2.62,
      "Magnesium": 16.1,
      "Total phenols": 93,
      "Flavanoids": 2.85,
      "Nonflavanoid phenols": 2.94,
      "Proanthocyanins": ".34",
      "Color intensity": 1.45,
      "Hue": 4.8,
      "OD280/OD315 of diluted wines": ".92",
      "Unknown": 3.22
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.3,
      "Ash": 1.72,
      "Alcalinity of ash": 2.14,
      "Magnesium": 17,
      "Total phenols": 94,
      "Flavanoids": 2.4,
      "Nonflavanoid phenols": 2.19,
      "Proanthocyanins": ".27",
      "Color intensity": 1.35,
      "Hue": 3.95,
      "OD280/OD315 of diluted wines": 1.02,
      "Unknown": 2.77
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.87,
      "Ash": 1.9,
      "Alcalinity of ash": 2.8,
      "Magnesium": 19.4,
      "Total phenols": 107,
      "Flavanoids": 2.95,
      "Nonflavanoid phenols": 2.97,
      "Proanthocyanins": ".37",
      "Color intensity": 1.76,
      "Hue": 4.5,
      "OD280/OD315 of diluted wines": 1.25,
      "Unknown": 3.4
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.02,
      "Ash": 1.68,
      "Alcalinity of ash": 2.21,
      "Magnesium": 16,
      "Total phenols": 96,
      "Flavanoids": 2.65,
      "Nonflavanoid phenols": 2.33,
      "Proanthocyanins": ".26",
      "Color intensity": 1.98,
      "Hue": 4.7,
      "OD280/OD315 of diluted wines": 1.04,
      "Unknown": 3.59
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.73,
      "Ash": 1.5,
      "Alcalinity of ash": 2.7,
      "Magnesium": 22.5,
      "Total phenols": 101,
      "Flavanoids": 3,
      "Nonflavanoid phenols": 3.25,
      "Proanthocyanins": ".29",
      "Color intensity": 2.38,
      "Hue": 5.7,
      "OD280/OD315 of diluted wines": 1.19,
      "Unknown": 2.71
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.58,
      "Ash": 1.66,
      "Alcalinity of ash": 2.36,
      "Magnesium": 19.1,
      "Total phenols": 106,
      "Flavanoids": 2.86,
      "Nonflavanoid phenols": 3.19,
      "Proanthocyanins": ".22",
      "Color intensity": 1.95,
      "Hue": 6.9,
      "OD280/OD315 of diluted wines": 1.09,
      "Unknown": 2.88
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.68,
      "Ash": 1.83,
      "Alcalinity of ash": 2.36,
      "Magnesium": 17.2,
      "Total phenols": 104,
      "Flavanoids": 2.42,
      "Nonflavanoid phenols": 2.69,
      "Proanthocyanins": ".42",
      "Color intensity": 1.97,
      "Hue": 3.84,
      "OD280/OD315 of diluted wines": 1.23,
      "Unknown": 2.87
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.76,
      "Ash": 1.53,
      "Alcalinity of ash": 2.7,
      "Magnesium": 19.5,
      "Total phenols": 132,
      "Flavanoids": 2.95,
      "Nonflavanoid phenols": 2.74,
      "Proanthocyanins": ".5",
      "Color intensity": 1.35,
      "Hue": 5.4,
      "OD280/OD315 of diluted wines": 1.25,
      "Unknown": 3
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.51,
      "Ash": 1.8,
      "Alcalinity of ash": 2.65,
      "Magnesium": 19,
      "Total phenols": 110,
      "Flavanoids": 2.35,
      "Nonflavanoid phenols": 2.53,
      "Proanthocyanins": ".29",
      "Color intensity": 1.54,
      "Hue": 4.2,
      "OD280/OD315 of diluted wines": 1.1,
      "Unknown": 2.87
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.48,
      "Ash": 1.81,
      "Alcalinity of ash": 2.41,
      "Magnesium": 20.5,
      "Total phenols": 100,
      "Flavanoids": 2.7,
      "Nonflavanoid phenols": 2.98,
      "Proanthocyanins": ".26",
      "Color intensity": 1.86,
      "Hue": 5.1,
      "OD280/OD315 of diluted wines": 1.04,
      "Unknown": 3.47
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.28,
      "Ash": 1.64,
      "Alcalinity of ash": 2.84,
      "Magnesium": 15.5,
      "Total phenols": 110,
      "Flavanoids": 2.6,
      "Nonflavanoid phenols": 2.68,
      "Proanthocyanins": ".34",
      "Color intensity": 1.36,
      "Hue": 4.6,
      "OD280/OD315 of diluted wines": 1.09,
      "Unknown": 2.78
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.05,
      "Ash": 1.65,
      "Alcalinity of ash": 2.55,
      "Magnesium": 18,
      "Total phenols": 98,
      "Flavanoids": 2.45,
      "Nonflavanoid phenols": 2.43,
      "Proanthocyanins": ".29",
      "Color intensity": 1.44,
      "Hue": 4.25,
      "OD280/OD315 of diluted wines": 1.12,
      "Unknown": 2.51
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.07,
      "Ash": 1.5,
      "Alcalinity of ash": 2.1,
      "Magnesium": 15.5,
      "Total phenols": 98,
      "Flavanoids": 2.4,
      "Nonflavanoid phenols": 2.64,
      "Proanthocyanins": ".28",
      "Color intensity": 1.37,
      "Hue": 3.7,
      "OD280/OD315 of diluted wines": 1.18,
      "Unknown": 2.69
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.22,
      "Ash": 3.99,
      "Alcalinity of ash": 2.51,
      "Magnesium": 13.2,
      "Total phenols": 128,
      "Flavanoids": 3,
      "Nonflavanoid phenols": 3.04,
      "Proanthocyanins": ".2",
      "Color intensity": 2.08,
      "Hue": 5.1,
      "OD280/OD315 of diluted wines": ".89",
      "Unknown": 3.53
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.56,
      "Ash": 1.71,
      "Alcalinity of ash": 2.31,
      "Magnesium": 16.2,
      "Total phenols": 117,
      "Flavanoids": 3.15,
      "Nonflavanoid phenols": 3.29,
      "Proanthocyanins": ".34",
      "Color intensity": 2.34,
      "Hue": 6.13,
      "OD280/OD315 of diluted wines": ".95",
      "Unknown": 3.38
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.41,
      "Ash": 3.84,
      "Alcalinity of ash": 2.12,
      "Magnesium": 18.8,
      "Total phenols": 90,
      "Flavanoids": 2.45,
      "Nonflavanoid phenols": 2.68,
      "Proanthocyanins": ".27",
      "Color intensity": 1.48,
      "Hue": 4.28,
      "OD280/OD315 of diluted wines": ".91",
      "Unknown": 3
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.88,
      "Ash": 1.89,
      "Alcalinity of ash": 2.59,
      "Magnesium": 15,
      "Total phenols": 101,
      "Flavanoids": 3.25,
      "Nonflavanoid phenols": 3.56,
      "Proanthocyanins": ".17",
      "Color intensity": 1.7,
      "Hue": 5.43,
      "OD280/OD315 of diluted wines": ".88",
      "Unknown": 3.56
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.24,
      "Ash": 3.98,
      "Alcalinity of ash": 2.29,
      "Magnesium": 17.5,
      "Total phenols": 103,
      "Flavanoids": 2.64,
      "Nonflavanoid phenols": 2.63,
      "Proanthocyanins": ".32",
      "Color intensity": 1.66,
      "Hue": 4.36,
      "OD280/OD315 of diluted wines": ".82",
      "Unknown": 3
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.05,
      "Ash": 1.77,
      "Alcalinity of ash": 2.1,
      "Magnesium": 17,
      "Total phenols": 107,
      "Flavanoids": 3,
      "Nonflavanoid phenols": 3,
      "Proanthocyanins": ".28",
      "Color intensity": 2.03,
      "Hue": 5.04,
      "OD280/OD315 of diluted wines": ".88",
      "Unknown": 3.35
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.21,
      "Ash": 4.04,
      "Alcalinity of ash": 2.44,
      "Magnesium": 18.9,
      "Total phenols": 111,
      "Flavanoids": 2.85,
      "Nonflavanoid phenols": 2.65,
      "Proanthocyanins": ".3",
      "Color intensity": 1.25,
      "Hue": 5.24,
      "OD280/OD315 of diluted wines": ".87",
      "Unknown": 3.33
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.38,
      "Ash": 3.59,
      "Alcalinity of ash": 2.28,
      "Magnesium": 16,
      "Total phenols": 102,
      "Flavanoids": 3.25,
      "Nonflavanoid phenols": 3.17,
      "Proanthocyanins": ".27",
      "Color intensity": 2.19,
      "Hue": 4.9,
      "OD280/OD315 of diluted wines": 1.04,
      "Unknown": 3.44
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.9,
      "Ash": 1.68,
      "Alcalinity of ash": 2.12,
      "Magnesium": 16,
      "Total phenols": 101,
      "Flavanoids": 3.1,
      "Nonflavanoid phenols": 3.39,
      "Proanthocyanins": ".21",
      "Color intensity": 2.14,
      "Hue": 6.1,
      "OD280/OD315 of diluted wines": ".91",
      "Unknown": 3.33
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.1,
      "Ash": 2.02,
      "Alcalinity of ash": 2.4,
      "Magnesium": 18.8,
      "Total phenols": 103,
      "Flavanoids": 2.75,
      "Nonflavanoid phenols": 2.92,
      "Proanthocyanins": ".32",
      "Color intensity": 2.38,
      "Hue": 6.2,
      "OD280/OD315 of diluted wines": 1.07,
      "Unknown": 2.75
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.94,
      "Ash": 1.73,
      "Alcalinity of ash": 2.27,
      "Magnesium": 17.4,
      "Total phenols": 108,
      "Flavanoids": 2.88,
      "Nonflavanoid phenols": 3.54,
      "Proanthocyanins": ".32",
      "Color intensity": 2.08,
      "Hue": 8.9,
      "OD280/OD315 of diluted wines": 1.12,
      "Unknown": 3.1
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.05,
      "Ash": 1.73,
      "Alcalinity of ash": 2.04,
      "Magnesium": 12.4,
      "Total phenols": 92,
      "Flavanoids": 2.72,
      "Nonflavanoid phenols": 3.27,
      "Proanthocyanins": ".17",
      "Color intensity": 2.91,
      "Hue": 7.2,
      "OD280/OD315 of diluted wines": 1.12,
      "Unknown": 2.91
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.83,
      "Ash": 1.65,
      "Alcalinity of ash": 2.6,
      "Magnesium": 17.2,
      "Total phenols": 94,
      "Flavanoids": 2.45,
      "Nonflavanoid phenols": 2.99,
      "Proanthocyanins": ".22",
      "Color intensity": 2.29,
      "Hue": 5.6,
      "OD280/OD315 of diluted wines": 1.24,
      "Unknown": 3.37
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.82,
      "Ash": 1.75,
      "Alcalinity of ash": 2.42,
      "Magnesium": 14,
      "Total phenols": 111,
      "Flavanoids": 3.88,
      "Nonflavanoid phenols": 3.74,
      "Proanthocyanins": ".32",
      "Color intensity": 1.87,
      "Hue": 7.05,
      "OD280/OD315 of diluted wines": 1.01,
      "Unknown": 3.26
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.77,
      "Ash": 1.9,
      "Alcalinity of ash": 2.68,
      "Magnesium": 17.1,
      "Total phenols": 115,
      "Flavanoids": 3,
      "Nonflavanoid phenols": 2.79,
      "Proanthocyanins": ".39",
      "Color intensity": 1.68,
      "Hue": 6.3,
      "OD280/OD315 of diluted wines": 1.13,
      "Unknown": 2.93
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.74,
      "Ash": 1.67,
      "Alcalinity of ash": 2.25,
      "Magnesium": 16.4,
      "Total phenols": 118,
      "Flavanoids": 2.6,
      "Nonflavanoid phenols": 2.9,
      "Proanthocyanins": ".21",
      "Color intensity": 1.62,
      "Hue": 5.85,
      "OD280/OD315 of diluted wines": ".92",
      "Unknown": 3.2
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.56,
      "Ash": 1.73,
      "Alcalinity of ash": 2.46,
      "Magnesium": 20.5,
      "Total phenols": 116,
      "Flavanoids": 2.96,
      "Nonflavanoid phenols": 2.78,
      "Proanthocyanins": ".2",
      "Color intensity": 2.45,
      "Hue": 6.25,
      "OD280/OD315 of diluted wines": ".98",
      "Unknown": 3.03
    },
    {
      "Alcohol": 1,
      "Malic Acid": 14.22,
      "Ash": 1.7,
      "Alcalinity of ash": 2.3,
      "Magnesium": 16.3,
      "Total phenols": 118,
      "Flavanoids": 3.2,
      "Nonflavanoid phenols": 3,
      "Proanthocyanins": ".26",
      "Color intensity": 2.03,
      "Hue": 6.38,
      "OD280/OD315 of diluted wines": ".94",
      "Unknown": 3.31
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.29,
      "Ash": 1.97,
      "Alcalinity of ash": 2.68,
      "Magnesium": 16.8,
      "Total phenols": 102,
      "Flavanoids": 3,
      "Nonflavanoid phenols": 3.23,
      "Proanthocyanins": ".31",
      "Color intensity": 1.66,
      "Hue": 6,
      "OD280/OD315 of diluted wines": 1.07,
      "Unknown": 2.84
    },
    {
      "Alcohol": 1,
      "Malic Acid": 13.72,
      "Ash": 1.43,
      "Alcalinity of ash": 2.5,
      "Magnesium": 16.7,
      "Total phenols": 108,
      "Flavanoids": 3.4,
      "Nonflavanoid phenols": 3.67,
      "Proanthocyanins": ".19",
      "Color intensity": 2.04,
      "Hue": 6.8,
      "OD280/OD315 of diluted wines": ".89",
      "Unknown": 2.87
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.37,
      "Ash": ".94",
      "Alcalinity of ash": 1.36,
      "Magnesium": 10.6,
      "Total phenols": 88,
      "Flavanoids": 1.98,
      "Nonflavanoid phenols": ".57",
      "Proanthocyanins": ".28",
      "Color intensity": ".42",
      "Hue": 1.95,
      "OD280/OD315 of diluted wines": 1.05,
      "Unknown": 1.82
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.33,
      "Ash": 1.1,
      "Alcalinity of ash": 2.28,
      "Magnesium": 16,
      "Total phenols": 101,
      "Flavanoids": 2.05,
      "Nonflavanoid phenols": 1.09,
      "Proanthocyanins": ".63",
      "Color intensity": ".41",
      "Hue": 3.27,
      "OD280/OD315 of diluted wines": 1.25,
      "Unknown": 1.67
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.64,
      "Ash": 1.36,
      "Alcalinity of ash": 2.02,
      "Magnesium": 16.8,
      "Total phenols": 100,
      "Flavanoids": 2.02,
      "Nonflavanoid phenols": 1.41,
      "Proanthocyanins": ".53",
      "Color intensity": ".62",
      "Hue": 5.75,
      "OD280/OD315 of diluted wines": ".98",
      "Unknown": 1.59
    },
    {
      "Alcohol": 2,
      "Malic Acid": 13.67,
      "Ash": 1.25,
      "Alcalinity of ash": 1.92,
      "Magnesium": 18,
      "Total phenols": 94,
      "Flavanoids": 2.1,
      "Nonflavanoid phenols": 1.79,
      "Proanthocyanins": ".32",
      "Color intensity": ".73",
      "Hue": 3.8,
      "OD280/OD315 of diluted wines": 1.23,
      "Unknown": 2.46
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.37,
      "Ash": 1.13,
      "Alcalinity of ash": 2.16,
      "Magnesium": 19,
      "Total phenols": 87,
      "Flavanoids": 3.5,
      "Nonflavanoid phenols": 3.1,
      "Proanthocyanins": ".19",
      "Color intensity": 1.87,
      "Hue": 4.45,
      "OD280/OD315 of diluted wines": 1.22,
      "Unknown": 2.87
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.17,
      "Ash": 1.45,
      "Alcalinity of ash": 2.53,
      "Magnesium": 19,
      "Total phenols": 104,
      "Flavanoids": 1.89,
      "Nonflavanoid phenols": 1.75,
      "Proanthocyanins": ".45",
      "Color intensity": 1.03,
      "Hue": 2.95,
      "OD280/OD315 of diluted wines": 1.45,
      "Unknown": 2.23
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.37,
      "Ash": 1.21,
      "Alcalinity of ash": 2.56,
      "Magnesium": 18.1,
      "Total phenols": 98,
      "Flavanoids": 2.42,
      "Nonflavanoid phenols": 2.65,
      "Proanthocyanins": ".37",
      "Color intensity": 2.08,
      "Hue": 4.6,
      "OD280/OD315 of diluted wines": 1.19,
      "Unknown": 2.3
    },
    {
      "Alcohol": 2,
      "Malic Acid": 13.11,
      "Ash": 1.01,
      "Alcalinity of ash": 1.7,
      "Magnesium": 15,
      "Total phenols": 78,
      "Flavanoids": 2.98,
      "Nonflavanoid phenols": 3.18,
      "Proanthocyanins": ".26",
      "Color intensity": 2.28,
      "Hue": 5.3,
      "OD280/OD315 of diluted wines": 1.12,
      "Unknown": 3.18
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.37,
      "Ash": 1.17,
      "Alcalinity of ash": 1.92,
      "Magnesium": 19.6,
      "Total phenols": 78,
      "Flavanoids": 2.11,
      "Nonflavanoid phenols": 2,
      "Proanthocyanins": ".27",
      "Color intensity": 1.04,
      "Hue": 4.68,
      "OD280/OD315 of diluted wines": 1.12,
      "Unknown": 3.48
    },
    {
      "Alcohol": 2,
      "Malic Acid": 13.34,
      "Ash": ".94",
      "Alcalinity of ash": 2.36,
      "Magnesium": 17,
      "Total phenols": 110,
      "Flavanoids": 2.53,
      "Nonflavanoid phenols": 1.3,
      "Proanthocyanins": ".55",
      "Color intensity": ".42",
      "Hue": 3.17,
      "OD280/OD315 of diluted wines": 1.02,
      "Unknown": 1.93
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.21,
      "Ash": 1.19,
      "Alcalinity of ash": 1.75,
      "Magnesium": 16.8,
      "Total phenols": 151,
      "Flavanoids": 1.85,
      "Nonflavanoid phenols": 1.28,
      "Proanthocyanins": ".14",
      "Color intensity": 2.5,
      "Hue": 2.85,
      "OD280/OD315 of diluted wines": 1.28,
      "Unknown": 3.07
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.29,
      "Ash": 1.61,
      "Alcalinity of ash": 2.21,
      "Magnesium": 20.4,
      "Total phenols": 103,
      "Flavanoids": 1.1,
      "Nonflavanoid phenols": 1.02,
      "Proanthocyanins": ".37",
      "Color intensity": 1.46,
      "Hue": 3.05,
      "OD280/OD315 of diluted wines": ".906",
      "Unknown": 1.82
    },
    {
      "Alcohol": 2,
      "Malic Acid": 13.86,
      "Ash": 1.51,
      "Alcalinity of ash": 2.67,
      "Magnesium": 25,
      "Total phenols": 86,
      "Flavanoids": 2.95,
      "Nonflavanoid phenols": 2.86,
      "Proanthocyanins": ".21",
      "Color intensity": 1.87,
      "Hue": 3.38,
      "OD280/OD315 of diluted wines": 1.36,
      "Unknown": 3.16
    },
    {
      "Alcohol": 2,
      "Malic Acid": 13.49,
      "Ash": 1.66,
      "Alcalinity of ash": 2.24,
      "Magnesium": 24,
      "Total phenols": 87,
      "Flavanoids": 1.88,
      "Nonflavanoid phenols": 1.84,
      "Proanthocyanins": ".27",
      "Color intensity": 1.03,
      "Hue": 3.74,
      "OD280/OD315 of diluted wines": ".98",
      "Unknown": 2.78
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.99,
      "Ash": 1.67,
      "Alcalinity of ash": 2.6,
      "Magnesium": 30,
      "Total phenols": 139,
      "Flavanoids": 3.3,
      "Nonflavanoid phenols": 2.89,
      "Proanthocyanins": ".21",
      "Color intensity": 1.96,
      "Hue": 3.35,
      "OD280/OD315 of diluted wines": 1.31,
      "Unknown": 3.5
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.96,
      "Ash": 1.09,
      "Alcalinity of ash": 2.3,
      "Magnesium": 21,
      "Total phenols": 101,
      "Flavanoids": 3.38,
      "Nonflavanoid phenols": 2.14,
      "Proanthocyanins": ".13",
      "Color intensity": 1.65,
      "Hue": 3.21,
      "OD280/OD315 of diluted wines": ".99",
      "Unknown": 3.13
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.66,
      "Ash": 1.88,
      "Alcalinity of ash": 1.92,
      "Magnesium": 16,
      "Total phenols": 97,
      "Flavanoids": 1.61,
      "Nonflavanoid phenols": 1.57,
      "Proanthocyanins": ".34",
      "Color intensity": 1.15,
      "Hue": 3.8,
      "OD280/OD315 of diluted wines": 1.23,
      "Unknown": 2.14
    },
    {
      "Alcohol": 2,
      "Malic Acid": 13.03,
      "Ash": ".9",
      "Alcalinity of ash": 1.71,
      "Magnesium": 16,
      "Total phenols": 86,
      "Flavanoids": 1.95,
      "Nonflavanoid phenols": 2.03,
      "Proanthocyanins": ".24",
      "Color intensity": 1.46,
      "Hue": 4.6,
      "OD280/OD315 of diluted wines": 1.19,
      "Unknown": 2.48
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.84,
      "Ash": 2.89,
      "Alcalinity of ash": 2.23,
      "Magnesium": 18,
      "Total phenols": 112,
      "Flavanoids": 1.72,
      "Nonflavanoid phenols": 1.32,
      "Proanthocyanins": ".43",
      "Color intensity": ".95",
      "Hue": 2.65,
      "OD280/OD315 of diluted wines": ".96",
      "Unknown": 2.52
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.33,
      "Ash": ".99",
      "Alcalinity of ash": 1.95,
      "Magnesium": 14.8,
      "Total phenols": 136,
      "Flavanoids": 1.9,
      "Nonflavanoid phenols": 1.85,
      "Proanthocyanins": ".35",
      "Color intensity": 2.76,
      "Hue": 3.4,
      "OD280/OD315 of diluted wines": 1.06,
      "Unknown": 2.31
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.7,
      "Ash": 3.87,
      "Alcalinity of ash": 2.4,
      "Magnesium": 23,
      "Total phenols": 101,
      "Flavanoids": 2.83,
      "Nonflavanoid phenols": 2.55,
      "Proanthocyanins": ".43",
      "Color intensity": 1.95,
      "Hue": 2.57,
      "OD280/OD315 of diluted wines": 1.19,
      "Unknown": 3.13
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12,
      "Ash": ".92",
      "Alcalinity of ash": 2,
      "Magnesium": 19,
      "Total phenols": 86,
      "Flavanoids": 2.42,
      "Nonflavanoid phenols": 2.26,
      "Proanthocyanins": ".3",
      "Color intensity": 1.43,
      "Hue": 2.5,
      "OD280/OD315 of diluted wines": 1.38,
      "Unknown": 3.12
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.72,
      "Ash": 1.81,
      "Alcalinity of ash": 2.2,
      "Magnesium": 18.8,
      "Total phenols": 86,
      "Flavanoids": 2.2,
      "Nonflavanoid phenols": 2.53,
      "Proanthocyanins": ".26",
      "Color intensity": 1.77,
      "Hue": 3.9,
      "OD280/OD315 of diluted wines": 1.16,
      "Unknown": 3.14
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.08,
      "Ash": 1.13,
      "Alcalinity of ash": 2.51,
      "Magnesium": 24,
      "Total phenols": 78,
      "Flavanoids": 2,
      "Nonflavanoid phenols": 1.58,
      "Proanthocyanins": ".4",
      "Color intensity": 1.4,
      "Hue": 2.2,
      "OD280/OD315 of diluted wines": 1.31,
      "Unknown": 2.72
    },
    {
      "Alcohol": 2,
      "Malic Acid": 13.05,
      "Ash": 3.86,
      "Alcalinity of ash": 2.32,
      "Magnesium": 22.5,
      "Total phenols": 85,
      "Flavanoids": 1.65,
      "Nonflavanoid phenols": 1.59,
      "Proanthocyanins": ".61",
      "Color intensity": 1.62,
      "Hue": 4.8,
      "OD280/OD315 of diluted wines": ".84",
      "Unknown": 2.01
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.84,
      "Ash": ".89",
      "Alcalinity of ash": 2.58,
      "Magnesium": 18,
      "Total phenols": 94,
      "Flavanoids": 2.2,
      "Nonflavanoid phenols": 2.21,
      "Proanthocyanins": ".22",
      "Color intensity": 2.35,
      "Hue": 3.05,
      "OD280/OD315 of diluted wines": ".79",
      "Unknown": 3.08
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.67,
      "Ash": ".98",
      "Alcalinity of ash": 2.24,
      "Magnesium": 18,
      "Total phenols": 99,
      "Flavanoids": 2.2,
      "Nonflavanoid phenols": 1.94,
      "Proanthocyanins": ".3",
      "Color intensity": 1.46,
      "Hue": 2.62,
      "OD280/OD315 of diluted wines": 1.23,
      "Unknown": 3.16
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.16,
      "Ash": 1.61,
      "Alcalinity of ash": 2.31,
      "Magnesium": 22.8,
      "Total phenols": 90,
      "Flavanoids": 1.78,
      "Nonflavanoid phenols": 1.69,
      "Proanthocyanins": ".43",
      "Color intensity": 1.56,
      "Hue": 2.45,
      "OD280/OD315 of diluted wines": 1.33,
      "Unknown": 2.26
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.65,
      "Ash": 1.67,
      "Alcalinity of ash": 2.62,
      "Magnesium": 26,
      "Total phenols": 88,
      "Flavanoids": 1.92,
      "Nonflavanoid phenols": 1.61,
      "Proanthocyanins": ".4",
      "Color intensity": 1.34,
      "Hue": 2.6,
      "OD280/OD315 of diluted wines": 1.36,
      "Unknown": 3.21
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.64,
      "Ash": 2.06,
      "Alcalinity of ash": 2.46,
      "Magnesium": 21.6,
      "Total phenols": 84,
      "Flavanoids": 1.95,
      "Nonflavanoid phenols": 1.69,
      "Proanthocyanins": ".48",
      "Color intensity": 1.35,
      "Hue": 2.8,
      "OD280/OD315 of diluted wines": 1,
      "Unknown": 2.75
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.08,
      "Ash": 1.33,
      "Alcalinity of ash": 2.3,
      "Magnesium": 23.6,
      "Total phenols": 70,
      "Flavanoids": 2.2,
      "Nonflavanoid phenols": 1.59,
      "Proanthocyanins": ".42",
      "Color intensity": 1.38,
      "Hue": 1.74,
      "OD280/OD315 of diluted wines": 1.07,
      "Unknown": 3.21
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.08,
      "Ash": 1.83,
      "Alcalinity of ash": 2.32,
      "Magnesium": 18.5,
      "Total phenols": 81,
      "Flavanoids": 1.6,
      "Nonflavanoid phenols": 1.5,
      "Proanthocyanins": ".52",
      "Color intensity": 1.64,
      "Hue": 2.4,
      "OD280/OD315 of diluted wines": 1.08,
      "Unknown": 2.27
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12,
      "Ash": 1.51,
      "Alcalinity of ash": 2.42,
      "Magnesium": 22,
      "Total phenols": 86,
      "Flavanoids": 1.45,
      "Nonflavanoid phenols": 1.25,
      "Proanthocyanins": ".5",
      "Color intensity": 1.63,
      "Hue": 3.6,
      "OD280/OD315 of diluted wines": 1.05,
      "Unknown": 2.65
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.69,
      "Ash": 1.53,
      "Alcalinity of ash": 2.26,
      "Magnesium": 20.7,
      "Total phenols": 80,
      "Flavanoids": 1.38,
      "Nonflavanoid phenols": 1.46,
      "Proanthocyanins": ".58",
      "Color intensity": 1.62,
      "Hue": 3.05,
      "OD280/OD315 of diluted wines": ".96",
      "Unknown": 2.06
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.29,
      "Ash": 2.83,
      "Alcalinity of ash": 2.22,
      "Magnesium": 18,
      "Total phenols": 88,
      "Flavanoids": 2.45,
      "Nonflavanoid phenols": 2.25,
      "Proanthocyanins": ".25",
      "Color intensity": 1.99,
      "Hue": 2.15,
      "OD280/OD315 of diluted wines": 1.15,
      "Unknown": 3.3
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.62,
      "Ash": 1.99,
      "Alcalinity of ash": 2.28,
      "Magnesium": 18,
      "Total phenols": 98,
      "Flavanoids": 3.02,
      "Nonflavanoid phenols": 2.26,
      "Proanthocyanins": ".17",
      "Color intensity": 1.35,
      "Hue": 3.25,
      "OD280/OD315 of diluted wines": 1.16,
      "Unknown": 2.96
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.47,
      "Ash": 1.52,
      "Alcalinity of ash": 2.2,
      "Magnesium": 19,
      "Total phenols": 162,
      "Flavanoids": 2.5,
      "Nonflavanoid phenols": 2.27,
      "Proanthocyanins": ".32",
      "Color intensity": 3.28,
      "Hue": 2.6,
      "OD280/OD315 of diluted wines": 1.16,
      "Unknown": 2.63
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.81,
      "Ash": 2.12,
      "Alcalinity of ash": 2.74,
      "Magnesium": 21.5,
      "Total phenols": 134,
      "Flavanoids": 1.6,
      "Nonflavanoid phenols": ".99",
      "Proanthocyanins": ".14",
      "Color intensity": 1.56,
      "Hue": 2.5,
      "OD280/OD315 of diluted wines": ".95",
      "Unknown": 2.26
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.29,
      "Ash": 1.41,
      "Alcalinity of ash": 1.98,
      "Magnesium": 16,
      "Total phenols": 85,
      "Flavanoids": 2.55,
      "Nonflavanoid phenols": 2.5,
      "Proanthocyanins": ".29",
      "Color intensity": 1.77,
      "Hue": 2.9,
      "OD280/OD315 of diluted wines": 1.23,
      "Unknown": 2.74
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.37,
      "Ash": 1.07,
      "Alcalinity of ash": 2.1,
      "Magnesium": 18.5,
      "Total phenols": 88,
      "Flavanoids": 3.52,
      "Nonflavanoid phenols": 3.75,
      "Proanthocyanins": ".24",
      "Color intensity": 1.95,
      "Hue": 4.5,
      "OD280/OD315 of diluted wines": 1.04,
      "Unknown": 2.77
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.29,
      "Ash": 3.17,
      "Alcalinity of ash": 2.21,
      "Magnesium": 18,
      "Total phenols": 88,
      "Flavanoids": 2.85,
      "Nonflavanoid phenols": 2.99,
      "Proanthocyanins": ".45",
      "Color intensity": 2.81,
      "Hue": 2.3,
      "OD280/OD315 of diluted wines": 1.42,
      "Unknown": 2.83
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.08,
      "Ash": 2.08,
      "Alcalinity of ash": 1.7,
      "Magnesium": 17.5,
      "Total phenols": 97,
      "Flavanoids": 2.23,
      "Nonflavanoid phenols": 2.17,
      "Proanthocyanins": ".26",
      "Color intensity": 1.4,
      "Hue": 3.3,
      "OD280/OD315 of diluted wines": 1.27,
      "Unknown": 2.96
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.6,
      "Ash": 1.34,
      "Alcalinity of ash": 1.9,
      "Magnesium": 18.5,
      "Total phenols": 88,
      "Flavanoids": 1.45,
      "Nonflavanoid phenols": 1.36,
      "Proanthocyanins": ".29",
      "Color intensity": 1.35,
      "Hue": 2.45,
      "OD280/OD315 of diluted wines": 1.04,
      "Unknown": 2.77
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.34,
      "Ash": 2.45,
      "Alcalinity of ash": 2.46,
      "Magnesium": 21,
      "Total phenols": 98,
      "Flavanoids": 2.56,
      "Nonflavanoid phenols": 2.11,
      "Proanthocyanins": ".34",
      "Color intensity": 1.31,
      "Hue": 2.8,
      "OD280/OD315 of diluted wines": ".8",
      "Unknown": 3.38
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.82,
      "Ash": 1.72,
      "Alcalinity of ash": 1.88,
      "Magnesium": 19.5,
      "Total phenols": 86,
      "Flavanoids": 2.5,
      "Nonflavanoid phenols": 1.64,
      "Proanthocyanins": ".37",
      "Color intensity": 1.42,
      "Hue": 2.06,
      "OD280/OD315 of diluted wines": ".94",
      "Unknown": 2.44
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.51,
      "Ash": 1.73,
      "Alcalinity of ash": 1.98,
      "Magnesium": 20.5,
      "Total phenols": 85,
      "Flavanoids": 2.2,
      "Nonflavanoid phenols": 1.92,
      "Proanthocyanins": ".32",
      "Color intensity": 1.48,
      "Hue": 2.94,
      "OD280/OD315 of diluted wines": 1.04,
      "Unknown": 3.57
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.42,
      "Ash": 2.55,
      "Alcalinity of ash": 2.27,
      "Magnesium": 22,
      "Total phenols": 90,
      "Flavanoids": 1.68,
      "Nonflavanoid phenols": 1.84,
      "Proanthocyanins": ".66",
      "Color intensity": 1.42,
      "Hue": 2.7,
      "OD280/OD315 of diluted wines": ".86",
      "Unknown": 3.3
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.25,
      "Ash": 1.73,
      "Alcalinity of ash": 2.12,
      "Magnesium": 19,
      "Total phenols": 80,
      "Flavanoids": 1.65,
      "Nonflavanoid phenols": 2.03,
      "Proanthocyanins": ".37",
      "Color intensity": 1.63,
      "Hue": 3.4,
      "OD280/OD315 of diluted wines": 1,
      "Unknown": 3.17
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.72,
      "Ash": 1.75,
      "Alcalinity of ash": 2.28,
      "Magnesium": 22.5,
      "Total phenols": 84,
      "Flavanoids": 1.38,
      "Nonflavanoid phenols": 1.76,
      "Proanthocyanins": ".48",
      "Color intensity": 1.63,
      "Hue": 3.3,
      "OD280/OD315 of diluted wines": ".88",
      "Unknown": 2.42
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.22,
      "Ash": 1.29,
      "Alcalinity of ash": 1.94,
      "Magnesium": 19,
      "Total phenols": 92,
      "Flavanoids": 2.36,
      "Nonflavanoid phenols": 2.04,
      "Proanthocyanins": ".39",
      "Color intensity": 2.08,
      "Hue": 2.7,
      "OD280/OD315 of diluted wines": ".86",
      "Unknown": 3.02
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.61,
      "Ash": 1.35,
      "Alcalinity of ash": 2.7,
      "Magnesium": 20,
      "Total phenols": 94,
      "Flavanoids": 2.74,
      "Nonflavanoid phenols": 2.92,
      "Proanthocyanins": ".29",
      "Color intensity": 2.49,
      "Hue": 2.65,
      "OD280/OD315 of diluted wines": ".96",
      "Unknown": 3.26
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.46,
      "Ash": 3.74,
      "Alcalinity of ash": 1.82,
      "Magnesium": 19.5,
      "Total phenols": 107,
      "Flavanoids": 3.18,
      "Nonflavanoid phenols": 2.58,
      "Proanthocyanins": ".24",
      "Color intensity": 3.58,
      "Hue": 2.9,
      "OD280/OD315 of diluted wines": ".75",
      "Unknown": 2.81
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.52,
      "Ash": 2.43,
      "Alcalinity of ash": 2.17,
      "Magnesium": 21,
      "Total phenols": 88,
      "Flavanoids": 2.55,
      "Nonflavanoid phenols": 2.27,
      "Proanthocyanins": ".26",
      "Color intensity": 1.22,
      "Hue": 2,
      "OD280/OD315 of diluted wines": ".9",
      "Unknown": 2.78
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.76,
      "Ash": 2.68,
      "Alcalinity of ash": 2.92,
      "Magnesium": 20,
      "Total phenols": 103,
      "Flavanoids": 1.75,
      "Nonflavanoid phenols": 2.03,
      "Proanthocyanins": ".6",
      "Color intensity": 1.05,
      "Hue": 3.8,
      "OD280/OD315 of diluted wines": 1.23,
      "Unknown": 2.5
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.41,
      "Ash": ".74",
      "Alcalinity of ash": 2.5,
      "Magnesium": 21,
      "Total phenols": 88,
      "Flavanoids": 2.48,
      "Nonflavanoid phenols": 2.01,
      "Proanthocyanins": ".42",
      "Color intensity": 1.44,
      "Hue": 3.08,
      "OD280/OD315 of diluted wines": 1.1,
      "Unknown": 2.31
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.08,
      "Ash": 1.39,
      "Alcalinity of ash": 2.5,
      "Magnesium": 22.5,
      "Total phenols": 84,
      "Flavanoids": 2.56,
      "Nonflavanoid phenols": 2.29,
      "Proanthocyanins": ".43",
      "Color intensity": 1.04,
      "Hue": 2.9,
      "OD280/OD315 of diluted wines": ".93",
      "Unknown": 3.19
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.03,
      "Ash": 1.51,
      "Alcalinity of ash": 2.2,
      "Magnesium": 21.5,
      "Total phenols": 85,
      "Flavanoids": 2.46,
      "Nonflavanoid phenols": 2.17,
      "Proanthocyanins": ".52",
      "Color intensity": 2.01,
      "Hue": 1.9,
      "OD280/OD315 of diluted wines": 1.71,
      "Unknown": 2.87
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.82,
      "Ash": 1.47,
      "Alcalinity of ash": 1.99,
      "Magnesium": 20.8,
      "Total phenols": 86,
      "Flavanoids": 1.98,
      "Nonflavanoid phenols": 1.6,
      "Proanthocyanins": ".3",
      "Color intensity": 1.53,
      "Hue": 1.95,
      "OD280/OD315 of diluted wines": ".95",
      "Unknown": 3.33
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.42,
      "Ash": 1.61,
      "Alcalinity of ash": 2.19,
      "Magnesium": 22.5,
      "Total phenols": 108,
      "Flavanoids": 2,
      "Nonflavanoid phenols": 2.09,
      "Proanthocyanins": ".34",
      "Color intensity": 1.61,
      "Hue": 2.06,
      "OD280/OD315 of diluted wines": 1.06,
      "Unknown": 2.96
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.77,
      "Ash": 3.43,
      "Alcalinity of ash": 1.98,
      "Magnesium": 16,
      "Total phenols": 80,
      "Flavanoids": 1.63,
      "Nonflavanoid phenols": 1.25,
      "Proanthocyanins": ".43",
      "Color intensity": ".83",
      "Hue": 3.4,
      "OD280/OD315 of diluted wines": ".7",
      "Unknown": 2.12
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12,
      "Ash": 3.43,
      "Alcalinity of ash": 2,
      "Magnesium": 19,
      "Total phenols": 87,
      "Flavanoids": 2,
      "Nonflavanoid phenols": 1.64,
      "Proanthocyanins": ".37",
      "Color intensity": 1.87,
      "Hue": 1.28,
      "OD280/OD315 of diluted wines": ".93",
      "Unknown": 3.05
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.45,
      "Ash": 2.4,
      "Alcalinity of ash": 2.42,
      "Magnesium": 20,
      "Total phenols": 96,
      "Flavanoids": 2.9,
      "Nonflavanoid phenols": 2.79,
      "Proanthocyanins": ".32",
      "Color intensity": 1.83,
      "Hue": 3.25,
      "OD280/OD315 of diluted wines": ".8",
      "Unknown": 3.39
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.56,
      "Ash": 2.05,
      "Alcalinity of ash": 3.23,
      "Magnesium": 28.5,
      "Total phenols": 119,
      "Flavanoids": 3.18,
      "Nonflavanoid phenols": 5.08,
      "Proanthocyanins": ".47",
      "Color intensity": 1.87,
      "Hue": 6,
      "OD280/OD315 of diluted wines": ".93",
      "Unknown": 3.69
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.42,
      "Ash": 4.43,
      "Alcalinity of ash": 2.73,
      "Magnesium": 26.5,
      "Total phenols": 102,
      "Flavanoids": 2.2,
      "Nonflavanoid phenols": 2.13,
      "Proanthocyanins": ".43",
      "Color intensity": 1.71,
      "Hue": 2.08,
      "OD280/OD315 of diluted wines": ".92",
      "Unknown": 3.12
    },
    {
      "Alcohol": 2,
      "Malic Acid": 13.05,
      "Ash": 5.8,
      "Alcalinity of ash": 2.13,
      "Magnesium": 21.5,
      "Total phenols": 86,
      "Flavanoids": 2.62,
      "Nonflavanoid phenols": 2.65,
      "Proanthocyanins": ".3",
      "Color intensity": 2.01,
      "Hue": 2.6,
      "OD280/OD315 of diluted wines": ".73",
      "Unknown": 3.1
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.87,
      "Ash": 4.31,
      "Alcalinity of ash": 2.39,
      "Magnesium": 21,
      "Total phenols": 82,
      "Flavanoids": 2.86,
      "Nonflavanoid phenols": 3.03,
      "Proanthocyanins": ".21",
      "Color intensity": 2.91,
      "Hue": 2.8,
      "OD280/OD315 of diluted wines": ".75",
      "Unknown": 3.64
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.07,
      "Ash": 2.16,
      "Alcalinity of ash": 2.17,
      "Magnesium": 21,
      "Total phenols": 85,
      "Flavanoids": 2.6,
      "Nonflavanoid phenols": 2.65,
      "Proanthocyanins": ".37",
      "Color intensity": 1.35,
      "Hue": 2.76,
      "OD280/OD315 of diluted wines": ".86",
      "Unknown": 3.28
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.43,
      "Ash": 1.53,
      "Alcalinity of ash": 2.29,
      "Magnesium": 21.5,
      "Total phenols": 86,
      "Flavanoids": 2.74,
      "Nonflavanoid phenols": 3.15,
      "Proanthocyanins": ".39",
      "Color intensity": 1.77,
      "Hue": 3.94,
      "OD280/OD315 of diluted wines": ".69",
      "Unknown": 2.84
    },
    {
      "Alcohol": 2,
      "Malic Acid": 11.79,
      "Ash": 2.13,
      "Alcalinity of ash": 2.78,
      "Magnesium": 28.5,
      "Total phenols": 92,
      "Flavanoids": 2.13,
      "Nonflavanoid phenols": 2.24,
      "Proanthocyanins": ".58",
      "Color intensity": 1.76,
      "Hue": 3,
      "OD280/OD315 of diluted wines": ".97",
      "Unknown": 2.44
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.37,
      "Ash": 1.63,
      "Alcalinity of ash": 2.3,
      "Magnesium": 24.5,
      "Total phenols": 88,
      "Flavanoids": 2.22,
      "Nonflavanoid phenols": 2.45,
      "Proanthocyanins": ".4",
      "Color intensity": 1.9,
      "Hue": 2.12,
      "OD280/OD315 of diluted wines": ".89",
      "Unknown": 2.78
    },
    {
      "Alcohol": 2,
      "Malic Acid": 12.04,
      "Ash": 4.3,
      "Alcalinity of ash": 2.38,
      "Magnesium": 22,
      "Total phenols": 80,
      "Flavanoids": 2.1,
      "Nonflavanoid phenols": 1.75,
      "Proanthocyanins": ".42",
      "Color intensity": 1.35,
      "Hue": 2.6,
      "OD280/OD315 of diluted wines": ".79",
      "Unknown": 2.57
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.86,
      "Ash": 1.35,
      "Alcalinity of ash": 2.32,
      "Magnesium": 18,
      "Total phenols": 122,
      "Flavanoids": 1.51,
      "Nonflavanoid phenols": 1.25,
      "Proanthocyanins": ".21",
      "Color intensity": ".94",
      "Hue": 4.1,
      "OD280/OD315 of diluted wines": ".76",
      "Unknown": 1.29
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.88,
      "Ash": 2.99,
      "Alcalinity of ash": 2.4,
      "Magnesium": 20,
      "Total phenols": 104,
      "Flavanoids": 1.3,
      "Nonflavanoid phenols": 1.22,
      "Proanthocyanins": ".24",
      "Color intensity": ".83",
      "Hue": 5.4,
      "OD280/OD315 of diluted wines": ".74",
      "Unknown": 1.42
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.81,
      "Ash": 2.31,
      "Alcalinity of ash": 2.4,
      "Magnesium": 24,
      "Total phenols": 98,
      "Flavanoids": 1.15,
      "Nonflavanoid phenols": 1.09,
      "Proanthocyanins": ".27",
      "Color intensity": ".83",
      "Hue": 5.7,
      "OD280/OD315 of diluted wines": ".66",
      "Unknown": 1.36
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.7,
      "Ash": 3.55,
      "Alcalinity of ash": 2.36,
      "Magnesium": 21.5,
      "Total phenols": 106,
      "Flavanoids": 1.7,
      "Nonflavanoid phenols": 1.2,
      "Proanthocyanins": ".17",
      "Color intensity": ".84",
      "Hue": 5,
      "OD280/OD315 of diluted wines": ".78",
      "Unknown": 1.29
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.51,
      "Ash": 1.24,
      "Alcalinity of ash": 2.25,
      "Magnesium": 17.5,
      "Total phenols": 85,
      "Flavanoids": 2,
      "Nonflavanoid phenols": ".58",
      "Proanthocyanins": ".6",
      "Color intensity": 1.25,
      "Hue": 5.45,
      "OD280/OD315 of diluted wines": ".75",
      "Unknown": 1.51
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.6,
      "Ash": 2.46,
      "Alcalinity of ash": 2.2,
      "Magnesium": 18.5,
      "Total phenols": 94,
      "Flavanoids": 1.62,
      "Nonflavanoid phenols": ".66",
      "Proanthocyanins": ".63",
      "Color intensity": ".94",
      "Hue": 7.1,
      "OD280/OD315 of diluted wines": ".73",
      "Unknown": 1.58
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.25,
      "Ash": 4.72,
      "Alcalinity of ash": 2.54,
      "Magnesium": 21,
      "Total phenols": 89,
      "Flavanoids": 1.38,
      "Nonflavanoid phenols": ".47",
      "Proanthocyanins": ".53",
      "Color intensity": ".8",
      "Hue": 3.85,
      "OD280/OD315 of diluted wines": ".75",
      "Unknown": 1.27
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.53,
      "Ash": 5.51,
      "Alcalinity of ash": 2.64,
      "Magnesium": 25,
      "Total phenols": 96,
      "Flavanoids": 1.79,
      "Nonflavanoid phenols": ".6",
      "Proanthocyanins": ".63",
      "Color intensity": 1.1,
      "Hue": 5,
      "OD280/OD315 of diluted wines": ".82",
      "Unknown": 1.69
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.49,
      "Ash": 3.59,
      "Alcalinity of ash": 2.19,
      "Magnesium": 19.5,
      "Total phenols": 88,
      "Flavanoids": 1.62,
      "Nonflavanoid phenols": ".48",
      "Proanthocyanins": ".58",
      "Color intensity": ".88",
      "Hue": 5.7,
      "OD280/OD315 of diluted wines": ".81",
      "Unknown": 1.82
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.84,
      "Ash": 2.96,
      "Alcalinity of ash": 2.61,
      "Magnesium": 24,
      "Total phenols": 101,
      "Flavanoids": 2.32,
      "Nonflavanoid phenols": ".6",
      "Proanthocyanins": ".53",
      "Color intensity": ".81",
      "Hue": 4.92,
      "OD280/OD315 of diluted wines": ".89",
      "Unknown": 2.15
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.93,
      "Ash": 2.81,
      "Alcalinity of ash": 2.7,
      "Magnesium": 21,
      "Total phenols": 96,
      "Flavanoids": 1.54,
      "Nonflavanoid phenols": ".5",
      "Proanthocyanins": ".53",
      "Color intensity": ".75",
      "Hue": 4.6,
      "OD280/OD315 of diluted wines": ".77",
      "Unknown": 2.31
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.36,
      "Ash": 2.56,
      "Alcalinity of ash": 2.35,
      "Magnesium": 20,
      "Total phenols": 89,
      "Flavanoids": 1.4,
      "Nonflavanoid phenols": ".5",
      "Proanthocyanins": ".37",
      "Color intensity": ".64",
      "Hue": 5.6,
      "OD280/OD315 of diluted wines": ".7",
      "Unknown": 2.47
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.52,
      "Ash": 3.17,
      "Alcalinity of ash": 2.72,
      "Magnesium": 23.5,
      "Total phenols": 97,
      "Flavanoids": 1.55,
      "Nonflavanoid phenols": ".52",
      "Proanthocyanins": ".5",
      "Color intensity": ".55",
      "Hue": 4.35,
      "OD280/OD315 of diluted wines": ".89",
      "Unknown": 2.06
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.62,
      "Ash": 4.95,
      "Alcalinity of ash": 2.35,
      "Magnesium": 20,
      "Total phenols": 92,
      "Flavanoids": 2,
      "Nonflavanoid phenols": ".8",
      "Proanthocyanins": ".47",
      "Color intensity": 1.02,
      "Hue": 4.4,
      "OD280/OD315 of diluted wines": ".91",
      "Unknown": 2.05
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.25,
      "Ash": 3.88,
      "Alcalinity of ash": 2.2,
      "Magnesium": 18.5,
      "Total phenols": 112,
      "Flavanoids": 1.38,
      "Nonflavanoid phenols": ".78",
      "Proanthocyanins": ".29",
      "Color intensity": 1.14,
      "Hue": 8.21,
      "OD280/OD315 of diluted wines": ".65",
      "Unknown": 2
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.16,
      "Ash": 3.57,
      "Alcalinity of ash": 2.15,
      "Magnesium": 21,
      "Total phenols": 102,
      "Flavanoids": 1.5,
      "Nonflavanoid phenols": ".55",
      "Proanthocyanins": ".43",
      "Color intensity": 1.3,
      "Hue": 4,
      "OD280/OD315 of diluted wines": ".6",
      "Unknown": 1.68
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.88,
      "Ash": 5.04,
      "Alcalinity of ash": 2.23,
      "Magnesium": 20,
      "Total phenols": 80,
      "Flavanoids": ".98",
      "Nonflavanoid phenols": ".34",
      "Proanthocyanins": ".4",
      "Color intensity": ".68",
      "Hue": 4.9,
      "OD280/OD315 of diluted wines": ".58",
      "Unknown": 1.33
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.87,
      "Ash": 4.61,
      "Alcalinity of ash": 2.48,
      "Magnesium": 21.5,
      "Total phenols": 86,
      "Flavanoids": 1.7,
      "Nonflavanoid phenols": ".65",
      "Proanthocyanins": ".47",
      "Color intensity": ".86",
      "Hue": 7.65,
      "OD280/OD315 of diluted wines": ".54",
      "Unknown": 1.86
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.32,
      "Ash": 3.24,
      "Alcalinity of ash": 2.38,
      "Magnesium": 21.5,
      "Total phenols": 92,
      "Flavanoids": 1.93,
      "Nonflavanoid phenols": ".76",
      "Proanthocyanins": ".45",
      "Color intensity": 1.25,
      "Hue": 8.42,
      "OD280/OD315 of diluted wines": ".55",
      "Unknown": 1.62
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.08,
      "Ash": 3.9,
      "Alcalinity of ash": 2.36,
      "Magnesium": 21.5,
      "Total phenols": 113,
      "Flavanoids": 1.41,
      "Nonflavanoid phenols": 1.39,
      "Proanthocyanins": ".34",
      "Color intensity": 1.14,
      "Hue": 9.4,
      "OD280/OD315 of diluted wines": ".57",
      "Unknown": 1.33
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.5,
      "Ash": 3.12,
      "Alcalinity of ash": 2.62,
      "Magnesium": 24,
      "Total phenols": 123,
      "Flavanoids": 1.4,
      "Nonflavanoid phenols": 1.57,
      "Proanthocyanins": ".22",
      "Color intensity": 1.25,
      "Hue": 8.6,
      "OD280/OD315 of diluted wines": ".59",
      "Unknown": 1.3
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.79,
      "Ash": 2.67,
      "Alcalinity of ash": 2.48,
      "Magnesium": 22,
      "Total phenols": 112,
      "Flavanoids": 1.48,
      "Nonflavanoid phenols": 1.36,
      "Proanthocyanins": ".24",
      "Color intensity": 1.26,
      "Hue": 10.8,
      "OD280/OD315 of diluted wines": ".48",
      "Unknown": 1.47
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.11,
      "Ash": 1.9,
      "Alcalinity of ash": 2.75,
      "Magnesium": 25.5,
      "Total phenols": 116,
      "Flavanoids": 2.2,
      "Nonflavanoid phenols": 1.28,
      "Proanthocyanins": ".26",
      "Color intensity": 1.56,
      "Hue": 7.1,
      "OD280/OD315 of diluted wines": ".61",
      "Unknown": 1.33
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.23,
      "Ash": 3.3,
      "Alcalinity of ash": 2.28,
      "Magnesium": 18.5,
      "Total phenols": 98,
      "Flavanoids": 1.8,
      "Nonflavanoid phenols": ".83",
      "Proanthocyanins": ".61",
      "Color intensity": 1.87,
      "Hue": 10.52,
      "OD280/OD315 of diluted wines": ".56",
      "Unknown": 1.51
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.58,
      "Ash": 1.29,
      "Alcalinity of ash": 2.1,
      "Magnesium": 20,
      "Total phenols": 103,
      "Flavanoids": 1.48,
      "Nonflavanoid phenols": ".58",
      "Proanthocyanins": ".53",
      "Color intensity": 1.4,
      "Hue": 7.6,
      "OD280/OD315 of diluted wines": ".58",
      "Unknown": 1.55
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.17,
      "Ash": 5.19,
      "Alcalinity of ash": 2.32,
      "Magnesium": 22,
      "Total phenols": 93,
      "Flavanoids": 1.74,
      "Nonflavanoid phenols": ".63",
      "Proanthocyanins": ".61",
      "Color intensity": 1.55,
      "Hue": 7.9,
      "OD280/OD315 of diluted wines": ".6",
      "Unknown": 1.48
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.84,
      "Ash": 4.12,
      "Alcalinity of ash": 2.38,
      "Magnesium": 19.5,
      "Total phenols": 89,
      "Flavanoids": 1.8,
      "Nonflavanoid phenols": ".83",
      "Proanthocyanins": ".48",
      "Color intensity": 1.56,
      "Hue": 9.01,
      "OD280/OD315 of diluted wines": ".57",
      "Unknown": 1.64
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.45,
      "Ash": 3.03,
      "Alcalinity of ash": 2.64,
      "Magnesium": 27,
      "Total phenols": 97,
      "Flavanoids": 1.9,
      "Nonflavanoid phenols": ".58",
      "Proanthocyanins": ".63",
      "Color intensity": 1.14,
      "Hue": 7.5,
      "OD280/OD315 of diluted wines": ".67",
      "Unknown": 1.73
    },
    {
      "Alcohol": 3,
      "Malic Acid": 14.34,
      "Ash": 1.68,
      "Alcalinity of ash": 2.7,
      "Magnesium": 25,
      "Total phenols": 98,
      "Flavanoids": 2.8,
      "Nonflavanoid phenols": 1.31,
      "Proanthocyanins": ".53",
      "Color intensity": 2.7,
      "Hue": 13,
      "OD280/OD315 of diluted wines": ".57",
      "Unknown": 1.96
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.48,
      "Ash": 1.67,
      "Alcalinity of ash": 2.64,
      "Magnesium": 22.5,
      "Total phenols": 89,
      "Flavanoids": 2.6,
      "Nonflavanoid phenols": 1.1,
      "Proanthocyanins": ".52",
      "Color intensity": 2.29,
      "Hue": 11.75,
      "OD280/OD315 of diluted wines": ".57",
      "Unknown": 1.78
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.36,
      "Ash": 3.83,
      "Alcalinity of ash": 2.38,
      "Magnesium": 21,
      "Total phenols": 88,
      "Flavanoids": 2.3,
      "Nonflavanoid phenols": ".92",
      "Proanthocyanins": ".5",
      "Color intensity": 1.04,
      "Hue": 7.65,
      "OD280/OD315 of diluted wines": ".56",
      "Unknown": 1.58
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.69,
      "Ash": 3.26,
      "Alcalinity of ash": 2.54,
      "Magnesium": 20,
      "Total phenols": 107,
      "Flavanoids": 1.83,
      "Nonflavanoid phenols": ".56",
      "Proanthocyanins": ".5",
      "Color intensity": ".8",
      "Hue": 5.88,
      "OD280/OD315 of diluted wines": ".96",
      "Unknown": 1.82
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.85,
      "Ash": 3.27,
      "Alcalinity of ash": 2.58,
      "Magnesium": 22,
      "Total phenols": 106,
      "Flavanoids": 1.65,
      "Nonflavanoid phenols": ".6",
      "Proanthocyanins": ".6",
      "Color intensity": ".96",
      "Hue": 5.58,
      "OD280/OD315 of diluted wines": ".87",
      "Unknown": 2.11
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.96,
      "Ash": 3.45,
      "Alcalinity of ash": 2.35,
      "Magnesium": 18.5,
      "Total phenols": 106,
      "Flavanoids": 1.39,
      "Nonflavanoid phenols": ".7",
      "Proanthocyanins": ".4",
      "Color intensity": ".94",
      "Hue": 5.28,
      "OD280/OD315 of diluted wines": ".68",
      "Unknown": 1.75
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.78,
      "Ash": 2.76,
      "Alcalinity of ash": 2.3,
      "Magnesium": 22,
      "Total phenols": 90,
      "Flavanoids": 1.35,
      "Nonflavanoid phenols": ".68",
      "Proanthocyanins": ".41",
      "Color intensity": 1.03,
      "Hue": 9.58,
      "OD280/OD315 of diluted wines": ".7",
      "Unknown": 1.68
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.73,
      "Ash": 4.36,
      "Alcalinity of ash": 2.26,
      "Magnesium": 22.5,
      "Total phenols": 88,
      "Flavanoids": 1.28,
      "Nonflavanoid phenols": ".47",
      "Proanthocyanins": ".52",
      "Color intensity": 1.15,
      "Hue": 6.62,
      "OD280/OD315 of diluted wines": ".78",
      "Unknown": 1.75
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.45,
      "Ash": 3.7,
      "Alcalinity of ash": 2.6,
      "Magnesium": 23,
      "Total phenols": 111,
      "Flavanoids": 1.7,
      "Nonflavanoid phenols": ".92",
      "Proanthocyanins": ".43",
      "Color intensity": 1.46,
      "Hue": 10.68,
      "OD280/OD315 of diluted wines": ".85",
      "Unknown": 1.56
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.82,
      "Ash": 3.37,
      "Alcalinity of ash": 2.3,
      "Magnesium": 19.5,
      "Total phenols": 88,
      "Flavanoids": 1.48,
      "Nonflavanoid phenols": ".66",
      "Proanthocyanins": ".4",
      "Color intensity": ".97",
      "Hue": 10.26,
      "OD280/OD315 of diluted wines": ".72",
      "Unknown": 1.75
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.58,
      "Ash": 2.58,
      "Alcalinity of ash": 2.69,
      "Magnesium": 24.5,
      "Total phenols": 105,
      "Flavanoids": 1.55,
      "Nonflavanoid phenols": ".84",
      "Proanthocyanins": ".39",
      "Color intensity": 1.54,
      "Hue": 8.66,
      "OD280/OD315 of diluted wines": ".74",
      "Unknown": 1.8
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.4,
      "Ash": 4.6,
      "Alcalinity of ash": 2.86,
      "Magnesium": 25,
      "Total phenols": 112,
      "Flavanoids": 1.98,
      "Nonflavanoid phenols": ".96",
      "Proanthocyanins": ".27",
      "Color intensity": 1.11,
      "Hue": 8.5,
      "OD280/OD315 of diluted wines": ".67",
      "Unknown": 1.92
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.2,
      "Ash": 3.03,
      "Alcalinity of ash": 2.32,
      "Magnesium": 19,
      "Total phenols": 96,
      "Flavanoids": 1.25,
      "Nonflavanoid phenols": ".49",
      "Proanthocyanins": ".4",
      "Color intensity": ".73",
      "Hue": 5.5,
      "OD280/OD315 of diluted wines": ".66",
      "Unknown": 1.83
    },
    {
      "Alcohol": 3,
      "Malic Acid": 12.77,
      "Ash": 2.39,
      "Alcalinity of ash": 2.28,
      "Magnesium": 19.5,
      "Total phenols": 86,
      "Flavanoids": 1.39,
      "Nonflavanoid phenols": ".51",
      "Proanthocyanins": ".48",
      "Color intensity": ".64",
      "Hue": 9.899999,
      "OD280/OD315 of diluted wines": ".57",
      "Unknown": 1.63
    },
    {
      "Alcohol": 3,
      "Malic Acid": 14.16,
      "Ash": 2.51,
      "Alcalinity of ash": 2.48,
      "Magnesium": 20,
      "Total phenols": 91,
      "Flavanoids": 1.68,
      "Nonflavanoid phenols": ".7",
      "Proanthocyanins": ".44",
      "Color intensity": 1.24,
      "Hue": 9.7,
      "OD280/OD315 of diluted wines": ".62",
      "Unknown": 1.71
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.71,
      "Ash": 5.65,
      "Alcalinity of ash": 2.45,
      "Magnesium": 20.5,
      "Total phenols": 95,
      "Flavanoids": 1.68,
      "Nonflavanoid phenols": ".61",
      "Proanthocyanins": ".52",
      "Color intensity": 1.06,
      "Hue": 7.7,
      "OD280/OD315 of diluted wines": ".64",
      "Unknown": 1.74
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.4,
      "Ash": 3.91,
      "Alcalinity of ash": 2.48,
      "Magnesium": 23,
      "Total phenols": 102,
      "Flavanoids": 1.8,
      "Nonflavanoid phenols": ".75",
      "Proanthocyanins": ".43",
      "Color intensity": 1.41,
      "Hue": 7.3,
      "OD280/OD315 of diluted wines": ".7",
      "Unknown": 1.56
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.27,
      "Ash": 4.28,
      "Alcalinity of ash": 2.26,
      "Magnesium": 20,
      "Total phenols": 120,
      "Flavanoids": 1.59,
      "Nonflavanoid phenols": ".69",
      "Proanthocyanins": ".43",
      "Color intensity": 1.35,
      "Hue": 10.2,
      "OD280/OD315 of diluted wines": ".59",
      "Unknown": 1.56
    },
    {
      "Alcohol": 3,
      "Malic Acid": 13.17,
      "Ash": 2.59,
      "Alcalinity of ash": 2.37,
      "Magnesium": 20,
      "Total phenols": 120,
      "Flavanoids": 1.65,
      "Nonflavanoid phenols": ".68",
      "Proanthocyanins": ".53",
      "Color intensity": 1.46,
      "Hue": 9.3,
      "OD280/OD315 of diluted wines": ".6",
      "Unknown": 1.62
    },
    {
      "Alcohol": 3,
      "Malic Acid": 14.13,
      "Ash": 4.1,
      "Alcalinity of ash": 2.74,
      "Magnesium": 24.5,
      "Total phenols": 96,
      "Flavanoids": 2.05,
      "Nonflavanoid phenols": ".76",
      "Proanthocyanins": ".56",
      "Color intensity": 1.35,
      "Hue": 9.2,
      "OD280/OD315 of diluted wines": ".61",
      "Unknown": 1.6
    }
  ]

  function roundStringTo3DecimalPlaces(inputString) {
    // Convert the string to a number
    const numberValue = parseFloat(inputString);
  
    // Check if the conversion was successful
    if (!isNaN(numberValue)) {
      // Round the number to 3 decimal places
      const roundedNumber = Math.round(numberValue * 1000) / 1000;
  
      // Convert the rounded number back to a string
      const roundedString = roundedNumber.toString();
  
      return roundedString;
    } else {
      // Handle the case where the input is not a valid number
      return inputString;
    }
  }

  // Function to calculate mean of an array
  function calculateMean(array) {
    const sum = array.reduce((acc, value) => acc + value, 0);
    return sum / array.length;
  }

  // Function to calculate median of an array
  function calculateMedian(array) {
    const sortedArray = array.sort((a, b) => a - b);
    const mid = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
      return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    } else {
      return sortedArray[mid];
    }
  }

  // Function to calculate mode of an array
  function calculateMode(array) {
    const countMap = {};
    let maxCount = 0;
    let mode;

    array.forEach((value) => {
      countMap[value] = (countMap[value] || 0) + 1;

      if (countMap[value] > maxCount) {
        maxCount = countMap[value];
        mode = value;
      }
    });

    return mode;
  }

  // Function to calculate class-wise statistics
  function calculateClassStatistics(dataset, property) {
    const classStatistics = {};

    dataset.forEach((entry) => {
      const alcoholClass = entry["Alcohol"];

      if (!classStatistics[alcoholClass]) {
        classStatistics[alcoholClass] = [];
      }

      classStatistics[alcoholClass].push(entry[property]);
    });

    return classStatistics;
  }

  // Function to display statistics in a tabular format
  function displayStatisticsTable(statistics) {
    const measures = Object.keys(statistics);

    const tableRows = measures.map((measure) => {
      const row = [measure];
      Object.keys(statistics[measure]).forEach((alcoholClass) => {
        row.push(calculateMean(statistics[measure][alcoholClass]));
        row.push(calculateMedian(statistics[measure][alcoholClass]));
        row.push(calculateMode(statistics[measure][alcoholClass]));
      });
      return (
        <tr key={measure}>
          {row.map((value, index) => (
            <td key={index} className='td'>{roundStringTo3DecimalPlaces(value)}</td>
          ))}
        </tr>
      );
    });

    const classLabels = Array.from(new Set(dataset.map(entry => entry["Alcohol"])));

    return (
      <table border="1" className='table'>
        <thead>
          <tr>
            <th>Measure</th>
            {classLabels.map((alcoholClass) => (
              <th key={alcoholClass} colSpan="3">Class {alcoholClass}</th>
            ))}
          </tr>
          <tr>
            <th></th>
            {classLabels.map((alcoholClass) => (
              <React.Fragment key={alcoholClass}>
                <th>Mean</th>
                <th>Median</th>
                <th>Mode</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }

  //Function to calculate Gamma
  function calculateGamma(entry) {
    const { Ash, Hue, Magnesium } = entry;
    return (Ash * Hue) / Magnesium;
  }

  // Function to calculate Gamma class-wise statistics
  function calculateClassStatisticsGamma(dataset) {
    const classStatistics = {};
  
    dataset.forEach((entry) => {
      const alcoholClass = entry["Alcohol"];
      const gamma = calculateGamma(entry);
  
      if (!classStatistics[alcoholClass]) {
        classStatistics[alcoholClass] = [];
      }
  
      classStatistics[alcoholClass].push(gamma);
    });
  
    return classStatistics;
  }

  // Function to display gamma statistics in a tabular format
  function displayGammaStatisticsTable(statistics) {
    const measures = Object.keys(statistics);

    const tableRows = measures.map((measure) => {
      const row = [measure];
      Object.keys(statistics[measure]).forEach((alcoholClass) => {
        row.push(calculateMean(statistics[measure][alcoholClass]));
        row.push(calculateMedian(statistics[measure][alcoholClass]));
        row.push(calculateMode(statistics[measure][alcoholClass]));
      });
      return (
        <tr key={measure}>
          {row.map((value, index) => (
            <td key={index} className='td'>{roundStringTo3DecimalPlaces(value)}</td>
          ))}
        </tr>
      );
    });

    const classLabels = Array.from(new Set(dataset.map(entry => entry["Alcohol"])));
    return (
      <table border="1" className='gamma-table'>
        <thead>
          <tr>
            <th>Measure</th>
            {classLabels.map((alcoholClass) => (
              <th key={alcoholClass} colSpan="3">Class {alcoholClass}</th>
            ))}
          </tr>
          <tr>
            <th></th>
            {classLabels.map((alcoholClass) => (
              <React.Fragment key={alcoholClass}>
                <th>Mean</th>
                <th>Median</th>
                <th>Mode</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }

  // Calculate Flavanoids class-wise statistics
  const flavanoidsStatistics = calculateClassStatistics(dataset, "Flavanoids");

  // Calculate Gamma class-wise statistics
  const gammaStatistics = calculateClassStatisticsGamma(dataset);
  


  return (
    <div className="App">
      <div className="App-header">
        <p>Statistical Measures</p>
      </div>
        <div className='div1'>
        {/* Display Flavanoids statistics table */}
           {displayStatisticsTable({ Flavanoids: flavanoidsStatistics })}  
        </div>
        <div className='div2'>
        {/* Display Gamma statistics table */}
           {displayGammaStatisticsTable({ Gamma: gammaStatistics })}
        </div>
    </div>
  );
}

export default App;
