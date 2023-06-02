import React from 'react';
import strapi from '~/utils/strapi';

export default function test() {
  const getData = async () => {
    const menuCategories = await strapi.find('menu-categories');
    console.log(menuCategories.data);
  };
  return (
    <div>
      <button onClick={getData}>Get real data</button>
      {JSON.stringify(getData)}
    </div>
  );
}
