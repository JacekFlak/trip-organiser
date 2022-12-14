import { Description } from '../typography/typography';
import styled from 'styled-components';

export interface NoDataScreenProps {
  title: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Description} {
    margin-top: 14px;
    letter-spacing: 1.25px;
    color: #000;
  }
`;

export const NoDataScreen = ({ title }: NoDataScreenProps) => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="106"
        height="95"
        viewBox="0 0 106 95"
        fill="none"
      >
        <g clipPath="url(#clip0_1303_1387)">
          <path
            d="M84.629 32.1989V88.9032C84.629 90.7918 83.0982 92.3225 81.2096 92.3225H10.2003C8.39412 92.3225 6.89941 90.9177 6.78754 89.1152L2.65062 22.4375C2.52852 20.4695 4.09166 18.8064 6.06343 18.8064H23.9836C25.0436 18.8064 26.0436 19.2979 26.691 20.1372L30.9625 25.6743C32.4732 27.6325 34.8065 28.7795 37.2797 28.7795H81.2096C83.0982 28.7795 84.629 30.3104 84.629 32.1989Z"
            stroke="black"
            strokeWidth="8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M72.6396 33.8463C78.9375 25.5811 78.3106 13.7272 70.7596 6.17598C62.5252 -2.05866 49.174 -2.05866 40.9394 6.17598C32.7048 14.4106 32.7048 27.7615 40.9394 35.9961C48.4907 43.5474 60.3448 44.1738 68.6099 37.876L70.8399 40.1061C70.1384 42.2751 70.649 44.7507 72.3712 46.4734L86.0726 60.1744C88.5208 62.6226 92.4901 62.6226 94.9378 60.1744C97.3861 57.7267 97.3861 53.7573 94.9378 51.3091L81.237 37.608C79.5143 35.8853 77.0386 35.3749 74.8696 36.0764L72.6396 33.8463ZM66.3269 31.5634C72.1131 25.7769 72.1131 16.3952 66.3269 10.6087C60.5403 4.82222 51.1586 4.82222 45.3721 10.6087C39.5856 16.3952 39.5856 25.7769 45.3721 31.5634C51.1586 37.3498 60.5403 37.3498 66.3269 31.5634Z"
            fill="black"
          />
          <path
            d="M56.1344 36.4731C64.7899 36.4731 71.8065 29.4565 71.8065 20.8011C71.8065 12.1456 64.7899 5.12903 56.1344 5.12903C47.479 5.12903 40.4624 12.1456 40.4624 20.8011C40.4624 29.4565 47.479 36.4731 56.1344 36.4731Z"
            fill="white"
          />
          <path
            d="M62.2963 17.8622C63.1866 16.972 63.1866 15.5286 62.2963 14.6384C61.4061 13.7482 59.9628 13.7482 59.0725 14.6384L49.4012 24.3098C48.5109 25.2 48.5109 26.6434 49.4012 27.5336C50.2914 28.4238 51.7347 28.4238 52.625 27.5336L62.2963 17.8622Z"
            fill="#FF5A00"
          />
          <path
            d="M52.6254 14.6383C51.7351 13.7481 50.2918 13.7481 49.4016 14.6383C48.5113 15.5286 48.5113 16.9719 49.4016 17.8621L59.073 27.5335C59.9632 28.4238 61.4065 28.4238 62.2968 27.5335C63.187 26.6433 63.187 25.2 62.2968 24.3097L52.6254 14.6383Z"
            fill="#FF5A00"
          />
          <path
            d="M22.6134 46.7312H98.5795C100.827 46.7312 102.463 48.8617 101.883 51.0327L91.5344 89.7854C91.1349 91.282 89.7797 92.3226 88.2308 92.3226H12.2646C10.0175 92.3226 8.38127 90.1923 8.96102 88.021L19.3098 49.2684C19.7093 47.7721 21.0647 46.7312 22.6134 46.7312Z"
            fill="#FF5A00"
            stroke="black"
            strokeWidth="8"
          />
        </g>
        <defs>
          <clipPath id="clip0_1303_1387">
            <rect width="106" height="94.6021" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <Description>{title}</Description>
    </Container>
  );
};
