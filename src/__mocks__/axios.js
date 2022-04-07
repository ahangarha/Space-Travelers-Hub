export default {
  get: () => Promise.resolve({
    data: [
      {
        rocket_id: 1,
        rocket_name: 'Elon-Musk',
        rocket_type: 'ZZZZ',
        flickr_images: ['firstImage'],
        description: 'Very Fly',
      },
    ],

  }),
};
