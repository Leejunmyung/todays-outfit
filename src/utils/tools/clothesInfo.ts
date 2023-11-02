export const clothesInfo = {
  getClothesType(tempt: number | undefined) {
    if (tempt === undefined) return;
    const clothes = {
      hat: 'woolen_hat.png',
      muffler: 'muffler.png',
      gloves: 'gloves.png',
      padding: 'padding.png',
      coat: 'coat.png',
      jacket: 'jacket.png',
      trench: 'trench.png',
      turtleneck: 'turtleneck.png',
      knit: 'knit.png',
      hoodie: 'hoodie.png',
      cardigan: 'cardigan.png',
      long_sleeves: 'long_sleeves.png',
      mtm: 'mtm.png',
      shirts: 'shirts.png',
      short_shirt: 'short_shirt.png',
      short_sleeve: 'short_sleeve.png',
      sleeveless: 'sleeveless_shirt.png',
      tank_top: 'tank_top.png',
      one_piece: 'one_piece.png',
      slacks: 'slacks.png',
      cotton_pants: 'cotton_trousers.png',
      jeans: 'jeans.png',
      short_pants: 'short_pants.png',
      skirt: 'skirt.png',
      boots: 'boots.png',
      running_shoes: 'running_shoes.png',
      flip_flops: 'flip_flops.png',
    };
    switch (true) {
      case tempt > 28:
        return [
          { name: '민소매', clothes: clothes.sleeveless },
          { name: '탱크탑', clothes: clothes.tank_top },
          { name: '반팔티', clothes: clothes.short_sleeve },
          { name: '숏팬츠', clothes: clothes.short_pants },
          { name: '원피스', clothes: clothes.one_piece },
        ];
      case tempt > 23:
        return [
          { name: '반팔티', clothes: clothes.short_sleeve },
          { name: '반팔셔츠', clothes: clothes.short_shirt },
          { name: '숏팬츠', clothes: clothes.short_pants },
          { name: '치마', clothes: clothes.skirt },
        ];
      case tempt > 20:
        return [
          { name: '긴팔', clothes: clothes.long_sleeves },
          { name: '면바지', clothes: clothes.cotton_pants },
          { name: '청바지', clothes: clothes.jeans },
        ];
      case tempt > 17:
        return [
          { name: '맨투맨', clothes: clothes.mtm },
          { name: '후드티', clothes: clothes.hoodie },
          { name: '청바지', clothes: clothes.jeans },
        ];
      case tempt > 12:
        return [
          { name: '가디건', clothes: clothes.cardigan },
          { name: '자켓', clothes: clothes.jacket },
          { name: '청바지', clothes: clothes.jeans },
          { name: '면바지', clothes: clothes.cotton_pants },
        ];
      case tempt > 9:
        return [
          { name: '가디건', clothes: clothes.cardigan },
          { name: '트렌치코트', clothes: clothes.trench },
          { name: '슬랙스', clothes: clothes.slacks },
        ];
      case tempt > 5:
        return [
          { name: '코트', clothes: clothes.coat },
          { name: '니트', clothes: clothes.knit },
        ];
      case tempt < 3:
        return [
          { name: '패딩', clothes: clothes.padding },
          { name: '코트', clothes: clothes.coat },
          { name: '목폴라', clothes: clothes.turtleneck },
        ];
    }
  },
};
