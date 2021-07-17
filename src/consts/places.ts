import { ImageSourcePropType } from "react-native";

const places = [
  {
    id: '1',
    name: 'Lago di Braies, Braies',
    location: 'Italy',
    image: require('../assets/location1.jpg') as ImageSourcePropType,
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
  },
  {
    id: '2',
    name: 'Siargao island',
    location: 'Philippines',
    image: require('../assets/location2.jpg') as ImageSourcePropType,
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
  },
  {
    id: '3',
    name: 'Manarola',
    location: 'Italy',
    image: require('../assets/location3.jpg') as ImageSourcePropType,
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
  },
  {
    id: '4',
    name: 'Perhentian Islands',
    location: 'Malaysia',
    image: require('../assets/location4.jpg') as ImageSourcePropType,
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
  },
];

export default places;
