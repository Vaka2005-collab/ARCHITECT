export interface Product {
  id: string;
  name: string;
  material: string;
  price: number;
  image: string;
  description: string;
  category: 'STILETTOS' | 'BLOCK HEELS' | 'ARCHIVES' | 'MULES';
}

export const PRODUCTS: Product[] = [
  {
    id: 'monolith-pump',
    name: 'The Monolith Pump',
    material: 'OBSIDIAN LEATHER',
    price: 840,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4im2wGJairKNPioeEpuy3Xkc-pxZfmsGWk5l7slYSOhxC4-dm5Dj89qQa_caFfvkup2NsnMiV3U0RMcIfoxNEGaUyhpiDAzfAoZ_pvKAOFrgE7rYlvTMmpgV63r54AN37xWmvcVGnmyNI3CcfrjzfrLY6i70gbIxQHDNorVZehCLyrQGLvA5zYJXUMQIEaAkt01fJyaX7GkwmBqdpzRzzddjFQ7opvAnHSmvhI6PkEo19Amn8xiN5sDaA8IeVNlzdMFRL0uiOXbjc',
    description: 'A study in architectural curve. The Monolith features a precision-sculpted heel and obsidian-grade leather for a silhouette that redefines formal elegance.',
    category: 'STILETTOS',
  },
  {
    id: 'aria-sandal',
    name: 'Aria Sandal',
    material: 'ALABASTER VELLUM',
    price: 720,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyD0Ym8Kg7I1CyzTy9Jydm_cZDFk9A-A81EBdzEVFyEEwrOFT8MnNqCg0ZQvoOHe_OA0T7w2h3TwALtAuYr37RKSKuC6koYv3Qnt5YclwfIrJK3cEVNkjT7N82L8Dj6CmbwixuAjjGCT2gmOeEOwSXE5qC2BmieWDYL5H9wwDCuaoqoWJr3ccBgov_H7_KqUf2XHQ9svoNif9A7BrJWqDJMUWPPvzWqfxL4Oa-OoxeB9L-sgBmOmd0DXq-xmHl1TnLlO3aGHZJ1Bj6',
    description: 'The Aria Sandal balances volume and void. Set on a geometric stone-like block heel, it provides structural support with an airy, minimalist aesthetic.',
    category: 'BLOCK HEELS',
  },
  {
    id: 'pivot-heel',
    name: 'The Pivot Heel',
    material: 'MIDNIGHT SATIN',
    price: 950,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRXEyhByowyuKkhF9MqIZWUx3xI1jCFWN3rRGKxej4jCMd5OZMppxsukYzhn5tKUBQvZg_EQEIRdy4Tz11PYfLEfUQAdQ8R4DL1y_6cSZE4Hp-LXEnfxLrhSfVeygUTK8G6MZozFNlUT5kfakSpC9WBTdS7B9YvX0FWc7wnhtkbZCiVuxIEoGGThQF7fXQHPvn_itbLY_eSXgHtiE93EDOYd--_NU3EW-zjNyXBzraIB19stI6PPLgR6heQyyJWxiDJ_xkiuCBFnUv',
    description: 'An exercise in kinetic grace. The Pivot Heel features a signature tapered silhouette and midnight-tone satin that catches light with every step.',
    category: 'STILETTOS',
  },
  {
    id: 'form-mule',
    name: 'Form Mule',
    material: 'CHALK MATTE',
    price: 680,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFy6yWIHw6B3uB1MMJid13dfCJyAHp9AtTJBkHpsj6wX6L8ZVWWSKvhSf6CxtgH9Q9IpW6jN4zMF-lCG9dfOt7I_GvPgca2w7TKxMQDQ6CgHvjr4UW3KWOhuOhMQ0Ge8wUCzNji5kAwKuJN5Rr1Y8srVHZa_GSZU8y_lcsHDM0wpTS6verwtqlBanabEhhKv94Axm8pjVgr9xPhpT5JwJy6B0tAuOO3uF24_Xpy1YhoAIbKVTV32P8XiA-b65iwusb6Z_w5yguSbmQ',
    description: 'The Form Mule strips away the noise. Crafted in chalk-matte leather with an asymmetric geometric heel, it represents the purest expression of our design ethos.',
    category: 'MULES',
  },
  {
    id: 'trace-stiletto',
    name: 'Trace Stiletto',
    material: 'ANTHRACITE SUEDE',
    price: 890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt8z_Nr52jjUbBa_7jd0vVdtKlmT0XUjl05KIDVvpVj4N-Ed99YtayiZ7zldHDYklYWzMMY57dsku3wYpBnMjwY_D4Mhtjr0jFWYZFgCPjmF-xO1w8HYuG7DptYixsjJ2Di5mJWuNkhuEbojpEJHS0cRLzYLtdu7PohQ3e1UItujIvHcmgqh2YyT39a75hbQ06wQ7z50-7DE_FeGiD2HOTSRB_xfGeJOFvI0VumoQhM_IHf1jemClE6iHAUaNHK1woPle1T_jK40FG',
    description: 'Softness meets structural rigor. The Trace Stiletto uses fine anthracite suede to create a deep, tonal profile that emphasizes its organic fluidity.',
    category: 'STILETTOS',
  },
  {
    id: 'vault-pump',
    name: 'Vault Pump',
    material: 'TAUPE GRAIN',
    price: 760,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvwi9aYAsI091jpRTmj3TkfzDGqqXuOBvaR6GLDwpEGinAPhXFU7Jd7H46r92VgwL4ddusgCLjKwC3Olw_HXrhPSOlqolVzSJpxn_Nfu6YRAMR1tEQ2cO4AL08IiHmYX7ULXcvPY07-srwmcd69noWZI657OEfVxYVmLSqYZV60ojAhaFqTJr_z5YH3KyZ-ez1oWsNhNtCKM-OeM7cv527m0ebhK-hTlQqzZ-2BUPCiRTYhIsaG2_jyIKKs9tzh9fGP8sNZOUvvIlz',
    description: 'A study in balance. The Vault Pump features a wide, comfortable footbed and a slender architectural heel, finished in a warm, versatile taupe grain.',
    category: 'STILETTOS',
  },
];

export const SILK_STILETTO: Product = {
  id: 'silk-stiletto-01',
  name: 'The Silk Stiletto No. 01',
  material: 'NAPPA SILK',
  price: 840,
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgukIX7kB1aSIPBdb5JUZvtmLKqDDmbObV2WqA3h76tk_QkbAWJAeWlZ6Z4I9gatwVeSY226DHmtWq6ddBqL8ekCjfftX6BL6bJgvd6cyfiiK4vyR8xyjkcz92FSjlZcHK7JkRlD9-6bqK9oIQOHQLTzVkbGn-I5lP1jAQpiHpoGDT7e8UFDzYurRLfR91F4VfG_HJAUi0bKvjnXfGY1ZTbADEBW7QsVypzQ3ssT4KSpSs_JcjOL5Os47NQtkbsU2UN6knELWG9_ll',
  description: 'A study in restraint. Crafted from single-source Nappa silk with a hand-sculpted heel, designed to elevate the everyday silhouette through subtle texture and organic fluidity.',
  category: 'STILETTOS',
};
