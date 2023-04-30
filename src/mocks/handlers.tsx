import { ResponseComposition, rest, RestContext, RestRequest } from 'msw';
import { API_PATH } from '../utils/consts';

export const testSearchQuery = 'az';
export const testIdQuery = 'garibaldi';

export const handlers = [
  rest.get(API_PATH, (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
    if (req.url.searchParams.get('name_like') === testSearchQuery) {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 'azzoni',
            image:
              'https://res.cloudinary.com/diyysshc5/image/upload/v1680290267/Huts/azzoni_umrbbd.jpg',
            alt: 'mountain hut with the mountains in the background',
            name: 'Azzoni hut',
            location: 'Resegone summit',
            province: 'Lecco',
            altitude: 1860,
            description: 'A hut on the top of Resegone summit with a breathtaking view',
          },
        ])
      );
    } else if (req.url.searchParams.get('id') === testIdQuery) {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 'garibaldi',
            image:
              'https://res.cloudinary.com/diyysshc5/image/upload/v1680290267/Huts/garibaldi_fxggry.jpg',
            alt: 'mountain hut with the mountains in the background',
            name: 'Garibaldi hut',
            location: 'Venerocolo',
            province: 'Brescia',
            altitude: 2548,
            description: 'A hut at the foot of the majestic north face of Adamello Mount',
          },
        ])
      );
    }
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 'azzoni',
          image:
            'https://res.cloudinary.com/diyysshc5/image/upload/v1680290267/Huts/azzoni_umrbbd.jpg',
          alt: 'mountain hut with the mountains in the background',
          name: 'Azzoni hut',
          location: 'Resegone summit',
          province: 'Lecco',
          altitude: 1860,
          description: 'A hut on the top of Resegone summit with a breathtaking view',
        },
        {
          id: 'albani',
          image:
            'https://res.cloudinary.com/diyysshc5/image/upload/v1680290267/Huts/albani_wai698.jpg',
          alt: 'mountain hut with the mountains in the background',
          name: 'Albani hut',
          location: 'Polzone lake',
          province: 'Bergamo',
          altitude: 1939,
          description: 'A beautiful mountain hut at the foot of Presolana mountain',
        },
        {
          id: 'tonolini',
          image:
            'https://res.cloudinary.com/diyysshc5/image/upload/v1680290274/Huts/tonolini_sldt6x.jpg',
          alt: 'mountain hut with the mountains in the background',
          name: 'Tonolini hut',
          location: 'Rotondo lake',
          province: 'Brescia',
          altitude: 2450,
          description: 'A mountain hut in the heart of the magnificent Adamello Park',
        },
        {
          id: 'benigni',
          image:
            'https://res.cloudinary.com/diyysshc5/image/upload/v1680290267/Huts/benigni_cy5jkv.jpg',
          alt: 'mountain hut with the mountains in the background',
          name: 'Benigni hut',
          location: 'Piazzotti lake',
          province: 'Bergamo',
          altitude: 2222,
          description: 'A small hut inside the Bergamo Orobie Park with a 360 view',
        },
        {
          id: 'quinto',
          image:
            'https://res.cloudinary.com/diyysshc5/image/upload/v1680290270/Huts/quinto_tbwvmh.jpg',
          alt: 'mountain hut with the mountains in the background',
          name: 'Quinto Alpini hut',
          location: 'Zebrù Valley',
          province: 'Sondrio',
          altitude: 2877,
          description: 'A beautiful hut among the peaks of Ortles-Cevedale group',
        },
        {
          id: 'campione',
          image:
            'https://res.cloudinary.com/diyysshc5/image/upload/v1680290267/Huts/campione_su4ush.jpg',
          alt: 'mountain hut with the mountains in the background',
          name: 'Campione hut',
          location: 'Campelli pass',
          province: 'Brescia',
          altitude: 1946,
          description: 'A hut at the border between Scalve and Camonica valleys',
        },
        {
          id: 'coca',
          image:
            'https://res.cloudinary.com/diyysshc5/image/upload/v1680290267/Huts/coca_rtcs3j.jpg',
          alt: 'mountain hut with the mountains in the background',
          name: 'Coca hut',
          location: 'Valbondione',
          province: 'Bergamo',
          altitude: 1892,
          description: 'A small hut in one of the most stunning spots in the Orobie',
        },
        {
          id: 'garibaldi',
          image:
            'https://res.cloudinary.com/diyysshc5/image/upload/v1680290267/Huts/garibaldi_fxggry.jpg',
          alt: 'mountain hut with the mountains in the background',
          name: 'Garibaldi hut',
          location: 'Venerocolo',
          province: 'Brescia',
          altitude: 2548,
          description: 'A hut at the foot of the majestic north face of Adamello Mount',
        },
      ])
    );
  }),
];
