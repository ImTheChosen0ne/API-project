'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://images.unsplash.com/photo-1588708908465-2a1a34ce25d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://images.unsplash.com/photo-1604946699847-61a018fc5f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://images.unsplash.com/photo-1593006776550-a4897f8527b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hbnR1Y2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://images.unsplash.com/photo-1593006778309-8ad64a845526?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5hbnR1Y2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://images.unsplash.com/photo-1654615348054-b54ee8ff158d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://spotimage5.com/photos',
        preview: true
      },      {
        spotId: 3,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://spotimage5.com/photos',
        preview: true
      },      {
        spotId: 4,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://spotimage5.com/photos',
        preview: true
      },      {
        spotId: 5,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://spotimage5.com/photos',
        preview: true
      },      {
        spotId: 6,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://spotimage5.com/photos',
        preview: true
      },      {
        spotId: 7,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://spotimage5.com/photos',
        preview: true
      },      {
        spotId: 8,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://spotimage5.com/photos',
        preview: true
      },      {
        spotId: 9,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://spotimage5.com/photos',
        preview: true
      },
       {
        spotId: 10,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://spotimage5.com/photos',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://spotimage5.com/photos',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://spotimage5.com/photos',
        preview: true
      }, {
        spotId: 13,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://spotimage5.com/photos',
        preview: true
      }, {
        spotId: 14,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://spotimage5.com/photos',
        preview: true
      }, {
        spotId: 15,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://spotimage5.com/photos',
        preview: true
      }, {
        spotId: 16,
        url: 'https://spotimage1.com/photos',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://spotimage2.com/photos',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://spotimage3.com/photos',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://spotimage4.com/photos',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://spotimage5.com/photos',
        preview: true
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4, 5] }
    }, {});
  }
};
