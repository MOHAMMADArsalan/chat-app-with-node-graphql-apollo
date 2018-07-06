import { Location } from '../../models';

export default {
  shareLocation: async (_, {
    name, category, lat, lon,
  }) => {
    try {
      const location = new Location({});
      location.name = name;
      location.category = category;
      location.location = {
        type: 'Point',
        coordinates: [parseFloat(lat), parseFloat(lon)],
      };
      await location.save();
      return {
        message: 'Created',
      };
    } catch (error) {
      throw error;
    }
  },
  // findNearBy: async (_, { lat, lon }) => {
  //   try {
  //     const res = await Location.find({
  //       location: {
  //         $near: {
  //           $geometry: { type: 'Point', coordinates: [parseFloat(lat), parseFloat(lon)] },
  //           $maxDistance: 5000,
  //           $minDistance: 1000,
  //         },
  //       },
  //     });
  //     console.log(JSON.stringify(res, undefined, 2));
  //     return res;
  //   } catch (err) {
  //     throw err;
  //   }
  // },
};
