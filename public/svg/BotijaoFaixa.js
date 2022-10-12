import {
    Box, 
  } from '@chakra-ui/react'

export default function BotijaoFaixa() {
    return (
        <Box w="100%" position="absolute" top="50%" transform="translateY(-50%)">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="auto"
                height="auto"
                fill="none"
                viewBox="0 0 1440 310"
            >
                <g clipPath="url(#clip0_721_245)">
                    <path
                    fill="#F4DCE4"
                    fillOpacity="0.14"
                    d="M1439.99 246.353L0 310v-36.934l1439.99-134.915v108.202z"
                    opacity="0.4"
                    ></path>
                    <path
                    fill="#00FAFF"
                    d="M1439.99 143.548L.053 279.901v-51.538L1440 0l-.01 143.548z"
                    ></path>
                </g>
                <defs>
                    <clipPath id="clip0_721_245">
                    <path fill="#fff" d="M0 0H1440V310H0z"></path>
                    </clipPath>
                </defs>
            </svg>
        </Box>
    );
  }