// Ovo je kao neka baza podataka, od tu on vuce podatke o projektima na zadnjoj sekciji
// Potrebno radi generiranja prema kategorijama
const projects = [
  {
    imagePath: 'images/projects/led-corner-lamp.jpg',
    name: 'LED Corner Lamp',
    description: 'Homemade corner lamp made of wooden pieces and a 3D printed part which connects them. A much cheaper and a more versatile variant.',
    link: 'https://www.instagram.com/reel/Cp8DsFwOnT7/',
    category: 'leds, 3d-prints'
  },
  {
    imagePath: 'images/projects/led-pool-1.jpg',
    name: 'LED Pool Table',
    description: 'I tried to make something unique, something that I have never seen anywhere. It looks very cool.',
    link: 'https://www.instagram.com/karlito0501/',
    category: 'leds'
  },
  {
    imagePath: 'images/projects/led-room-lana.jpg',
    name: 'LED Room',
    description: 'I love it when everything lights up, it looks so good, but you have to know how to do it. I also do construction work so that everything looks nice and professional in the end.',
    link: 'https://www.instagram.com/reel/CZsLiBeAfFJ/',
    category: 'leds'
  },
  {
    imagePath: 'images/projects/3d-printed-tap.jpg',
    name: '3D Printed Tap Handle',
    description: 'I love it when I can use my skills for something really useful. I 3D-printed a tap handle that was broken.',
    link: 'https://www.instagram.com/reel/CrGgdxgpj2P/',
    category: '3d-prints'
  },
  {
    imagePath: 'images/projects/beer-maker-2.jpg',
    name: 'Temperature control device',
    description: 'I like projects like this the most because I design and do everything myself. Just the way I want it.',
    link: 'https://www.instagram.com/reel/CwIqncGsbQl/',
    category: '3d-prints, electronics'
  },
  {
    imagePath: 'images/projects/happy-leds-app.jpg',
    name: 'Happy LEDs App',
    description: 'My first IoT project from scratch. Control of LED lights via mobile phone app.',
    link: 'https://github.com/KarloLeksic/HappyLEDs-IoT-project',
    category: 'leds'
  },
  {
    imagePath: 'images/projects/robotic-arm.jpg',
    name: 'Remote Controlled Robotic Arm',
    description: 'My final work at college. At that time I didn\'t know anything about 3D modeling, but everything else is my work inspired by videos on YouTube.',
    link: 'https://www.instagram.com/reel/CfGzTHGODpx/',
    category: 'electronics, 3d-prints'
  },
  {
    imagePath: 'images/projects/IoT-sensor-printed-box.jpg',
    name: 'Some Smart Home Prints',
    description: 'Unfortunately, I don\'t have my own house or apartment, so this is improvised, but the 3D printed cases for the sensors look very cool.',
    link: 'https://www.instagram.com/reel/CsMLpKAsanr/',
    category: '3d-prints, electronics'
  },
  {
    imagePath: 'images/projects/power-control-board.jpg',
    name: 'Power control board',
    description: "I don't know what to call this thing, but I love practical things that I can completely adapt to my wants and needs.",
    link: 'https://www.instagram.com/reel/C0Cy1JiMICC/?utm_source=ig_web_button_share_sheet&igshid=MzRlODBiNWFlZA==',
    category: '3d-prints, electronics'
  },
  {
    imagePath: 'images/projects/portfolio-website.jpg',
    name: 'Portfolio Website',
    description: 'My first site that I made since I started learning front-end web programming in detail.',
    link: 'https://github.com/KarloLeksic/Portfolio-Website',
    category: 'web'
  },
  {
    imagePath: 'images/projects/perfumes-shop.jpg',
    name: 'Innesa Perfumes Webshop',
    description: 'The design is inspired by a free template, and I coded the page myself to make it look as similar as possible to the original.',
    link: 'https://github.com/KarloLeksic/Innesa-Perfumes-webshop',
    category: 'web'
  },
  {
    imagePath: 'images/projects/weather-app.jpg',
    name: 'Weather Application',
    description: "The app I'm currently working on. Retrieving real-time data via API and displaying it while applying newly learned things.",
    link: 'https://karloleksic.github.io/Weather-application/',
    category: 'web'
  }
];
