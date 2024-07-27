// import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import '../styles/common.css';

interface Link {
  label: string;
  url: string;
}

interface Project {
  imgSrc: string | null;
  imgAlt: string;
  title: string;
  description: string;
  links: Link[];
}

export const projectsData: Project[] = [
  {
    imgSrc: "http://www.disaster-medutainment.jp/wp/wp-content/themes/theme_pc/images/learn_disaster_medicine/title.jpg",
    imgAlt: "災害医療タッチ",
    title: "災害医療タッチ",
    description: "いつでもどこでも災害医療を学ぶためのアプリ",
    links: [
      { label: "HP", url: "http://www.disaster-medutainment.jp/learn_the_disaster_medical/" },
      { label: "iOS", url: "https://apps.apple.com/jp/app/%E7%81%BD%E5%AE%B3%E5%8C%BB%E7%99%82%E3%82%BF%E3%83%83%E3%83%81/id1139091258" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=go.aist.DMTouch" }
    ]
  },
  {
    imgSrc: "http://www.disaster-medutainment.jp/wp/wp-content/themes/theme_pc/images/textbook_to_junior/title.jpg",
    imgAlt: "災害医療クエスト",
    title: "災害医療クエスト",
    description: "ゲーム感覚でこどもにも災害医療教育のためのアプリ",
    links: [
      { label: "HP", url: "http://www.disaster-medutainment.jp/teaching_materials_for_junior/" },
      { label: "iOS", url: "" },
      { label: "Android", url: "https://play.google.com/store/apps/details?id=go.aist.DMQuest" },
    ]
  },
  {
    imgSrc: "http://gesture-interface.jp/wp/wp-content/uploads/2018/09/%E9%87%8D%E5%BA%A6%E9%81%8B%E5%8B%95%E6%A9%9F%E8%83%BD%E9%9A%9C%E5%AE%B3%E8%80%85%E6%94%AF%E6%8F%B4_top-2.png",
    imgAlt: "ジェスチャーミュージック",
    title: "ジェスチャーミュージック",
    description: "ジェスチャーインターフェースのための音楽演奏ゲーム",
    links: [
      { label: "HP", url: "http://gesture-interface.jp/download/gesture_music/" },
    ]
  },
  {
    imgSrc: "https://raw.githubusercontent.com/Seeeeee-D/Hobeeeeee/develop/static/title.png",
    imgAlt: "Hobeeeeee!!",
    title: "Hobeeeeee!!",
    description: "新しい趣味を見つけたい・広めたいという人の願望を叶えるWeb サービス",
    links: [
      { label: "HP", url: "https://hobeeeeee.netlify.app/" },
    ]
  },
];

