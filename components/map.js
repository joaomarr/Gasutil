import { 
    Box, 
    useColorModeValue 
} from "@chakra-ui/react";
import { 
    GoogleMap, 
    useLoadScript,
    MarkerF,
} from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '400px',
    margin: '25px 0px', 
    position: 'relative',
  };

export default function Map() {
    const compCoords = { lat: -19.945, lng: -43.972 };
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (isLoaded) {
        return (
            <GoogleMap
                zoom={15}
                center={compCoords}
                mapContainerStyle={containerStyle}
            >
                <Box w="80px" h="100%" position="absolute" left={-4} bgGradient="linear(to-r, #FFFFFF, rgba(255, 255, 255, 0))"></Box>
                <MarkerF 
                    position={compCoords} 
                />
                <Box w="80px" h="100%" position="absolute" right={-4} bgGradient="linear(to-l, #FFFFFF, rgba(255, 255, 255, 0))"></Box>
            </GoogleMap>
        )
    }
}