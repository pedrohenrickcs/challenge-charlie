import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WeatherContainer } from '@/components/WeatherContainer';
import { ContentData } from '@/types/WeatherContainer';

const mockData: ContentData = {
  data: {
    weather: [{
      description: 'clear sky', icon: '01d',
      id: 0,
      main: ''
    }],
    main: {
      feels_like: 25, humidity: 80, pressure: 1012,
      temp: 0
    },
    wind: { speed: 10 },
    name: ''
  },
  dataNextDays: {
    list: [
      {
        main: {
          feels_like: 25,
          temp: 0,
          pressure: 0,
          humidity: 0
        },
        weather: [],
        wind: {
          speed: 5
        }
      },
      {
        main: {
          feels_like: 26,
          temp: 0,
          pressure: 0,
          humidity: 0
        },
        weather: [],
        wind: {
          speed: 5
        }
      },
      {
        main: {
          feels_like: 27,
          temp: 0,
          pressure: 0,
          humidity: 0
        },
        weather: [],
        wind: {
          speed: 5
        }
      },
    ],
  },
  coordinates: { latitude: 0, longitude: 0 },
};

describe('WeatherContainer', () => {
  it('renders weather data correctly', () => {
    const { container } = render(<WeatherContainer {...mockData} />);
    console.log(container.innerHTML);
  });

});

