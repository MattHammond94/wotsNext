// DISCRIMINATING UNIONS:

// Using Discriminating Unions together with if checks or switch statements is much cleaner and eaiser to maintain:

// =====================================
// ORIGINAL LOCATION STATE:
//  MESSY:

// type LocationState = {
//   state: "Loading" | "Success" | "Error"
//   coords?: { lat: number; lon: number }
//   error?: { message: string }
// }

// NOTE - This only works for a literal type. It will not work on a generic type. 

type LoadingLocationState = {
  state: "Loading"
}

type SuccessLocationState = {
  state: "Success"
  coords: { lat: number; lon: number }
}

type ErrorLocationState = {
  state: "Error"
  error: { message: string }
}

type LocationState = LoadingLocationState | SuccessLocationState | ErrorLocationState;

function printLocation(location: LocationState) {
  switch (location.state) {
    case "Loading":
      console.log(location.state)
      break
    case "Success":
      console.log(location.coords.lat, location.coords.lon)
      break
    case "Error":
      console.log(location.error.message)
      break
  }
}