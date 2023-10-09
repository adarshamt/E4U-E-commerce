function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  
  function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
  
    // Convert latitude and longitude from degrees to radians
    lat1 = toRadians(lat1);
    lon1 = toRadians(lon1);
    lat2 = toRadians(lat2);
    lon2 = toRadians(lon2);
  
    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;
  
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
     // Distance in kilometers
  
    return distance;
  }
  
  // Example usage
  const lat1 = 37.7749;
  const lon1 = -122.4194;
  const lat2 = 34.0522;
  const lon2 = -118.2437;
  const distance = haversine(lat1, lon1, lat2, lon2);
  console.log(`Distance: ${distance} kilometers`);
  