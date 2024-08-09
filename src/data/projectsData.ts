import '../styles/common.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faAppStoreIos } from "@fortawesome/free-brands-svg-icons";

interface Link {
  label: string;
  url: string;
  icon?: IconDefinition;
}

export interface ProjectData {
  imgSrc: string | null;
  imgAlt: string;
  title: string;
  description: string;
  links: Link[];
}

export const projectsData: ProjectData[] = [
  {
    imgSrc: "/assets/project/touch.jpg",
    imgAlt: "災害医療タッチ",
    title: "災害医療タッチ",
    description: "いつでもどこでも災害医療を学ぶためのアプリ",
    links: [
      {
        label: "HP",
        url: "http://www.disaster-medutainment.jp/learn_the_disaster_medical/",
        icon: faGlobe,
      },
      {
        label: "iOS",
        url: "https://apps.apple.com/jp/app/%E7%81%BD%E5%AE%B3%E5%8C%BB%E7%99%82%E3%82%BF%E3%83%83%E3%83%81/id1139091258",
        icon: faAppStoreIos,
      },
      {
        label: "Android",
        url: "https://play.google.com/store/apps/details?id=go.aist.DMTouch",
        icon: faAndroid,
      }
    ]
  },
  {
    imgSrc: "/assets/project/quest.jpg",
    imgAlt: "災害医療クエスト",
    title: "災害医療クエスト",
    description: "ゲーム感覚でこどもにも災害医療教育のためのアプリ",
    links: [
      {
        label: "HP",
        url: "http://www.disaster-medutainment.jp/teaching_materials_for_junior/",
        icon: faGlobe,
      },
      {
        label: "iOS",
        url: "https://apps.apple.com/jp/app/%E7%81%BD%E5%AE%B3%E5%8C%BB%E7%99%82quest/id1139119937",
        icon: faAppStoreIos,
      },
      {
        label: "Android",
        url: "https://play.google.com/store/apps/details?id=go.aist.DMQuest",
        icon: faAndroid,
      },
    ]
  },
  {
    imgSrc: "/assets/project/gesture-music.png",
    imgAlt: "ジェスチャーミュージック",
    title: "ジェスチャーミュージック",
    description: "ジェスチャーインターフェースのための音楽演奏ゲーム",
    links: [
      {
        label: "HP",
        url: "http://gesture-interface.jp/download/gesture_music/",
        icon: faGlobe,
      },
    ]
  },
  {
    imgSrc: "https://raw.githubusercontent.com/Seeeeee-D/Hobeeeeee/develop/static/title.png",
    imgAlt: "Hobeeeeee!!",
    title: "Hobeeeeee!!",
    description: "新しい趣味を見つけたい・広めたいという人の願望を叶えるWeb サービス",
    links: [
      {
        label: "HP",
        url: "https://hobeeeeee.netlify.app/",
        icon: faGlobe,
      },
    ]
  },
];

