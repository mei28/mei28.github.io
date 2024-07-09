// src/pages/AllAbouts.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faKaggle, faAtlassian, faSpeakerDeck } from '@fortawesome/free-brands-svg-icons';
import ReactGA from 'react-ga4';

// Profile Component
const Profile: React.FC = () => (
  <div className="bg-white p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-4">Profile</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>東京大学 総合文化研究科 広域科学専攻 広域システム科学系 博士後期課程 1年</li>
      <li>東京大学 馬場研究室</li>
      <li>mail: <span className="font-mono">mingzhe-yang [at] g.ecc.u-tokyo.ac.jp</span></li>
    </ul>
  </div>
);

// Accounts Component
const Accounts: React.FC = () => (
  <div className="bg-white p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-4">Accounts</h2>
    <ul className="flex flex-wrap gap-4">
      <li>
        <a href="https://github.com/mei28" className="flex items-center gap-2 text-gray-600 hover:text-black">
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </a>
      </li>
      <li>
        <a href="https://qiita.com/mei28" className="flex items-center gap-2 text-gray-600 hover:text-black">
          <FontAwesomeIcon icon={faGithub} />
          Qiita
        </a>
      </li>
      <li>
        <a href="https://www.kaggle.com/mei2828" className="flex items-center gap-2 text-gray-600 hover:text-black">
          <FontAwesomeIcon icon={faKaggle} />
          Kaggle
        </a>
      </li>
      <li>
        <a href="https://atcoder.jp/users/mei28" className="flex items-center gap-2 text-gray-600 hover:text-black">
          <FontAwesomeIcon icon={faAtlassian} />
          AtCoder
        </a>
      </li>
      <li>
        <a href="https://speakerdeck.com/mei28" className="flex items-center gap-2 text-gray-600 hover:text-black">
          <FontAwesomeIcon icon={faSpeakerDeck} />
          Speaker Deck
        </a>
      </li>
    </ul>
  </div>
);

// Education Component
const Education: React.FC = () => (
  <div className="bg-white p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-4">Education</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>
        <strong>博士 (学術)</strong>, 2022/10 - 2025/09 (予定)
        <br />
        <a href="https://system.c.u-tokyo.ac.jp/" className="text-blue-500 hover:underline">東京大学総合文化研究科広域科学専攻広域システム科学系</a>
        <br />
        指導教員: <a href="http://yukinobaba.jp/" className="text-blue-500 hover:underline">馬場雪乃</a>
      </li>
      <li>
        <strong>修士 (工学)</strong>, 2020/04 - 2022/03
        <br />
        <a href="https://www.cs.tsukuba.ac.jp/" className="text-blue-500 hover:underline">筑波大学理工情報生命学術院システム情報工学研究群情報理工学位プログラム</a>
        <br />
        修士論文: 「公平な判断に向けた公平性配慮型機械学習を用いた機械教示」
        <br />
        指導教員: <a href="http://yukinobaba.jp/" className="text-blue-500 hover:underline">馬場雪乃</a>
      </li>
      <li>
        <strong>学士 (情報工学)</strong>, 2016/04 - 2020/03
        <br />
        <a href="https://www.coins.tsukuba.ac.jp/" className="text-blue-500 hover:underline">筑波大学情報学群情報科学類</a>
        <br />
        卒業論文: 「教師なし機械教示」
        <br />
        指導教員: <a href="http://yukinobaba.jp/" className="text-blue-500 hover:underline">馬場雪乃</a>
      </li>
    </ul>
  </div>
);

// WorkExperience Component
const WorkExperience: React.FC = () => (
  <div className="bg-white p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>
        リサーチアシスタント, 筑波大学: 2020/04 - 2022/06
        <br />
        行動経済学に基づく個人的・集団的評価の数理モデルの開発
        <br />
        人間の認知バイアスの影響を軽減する手法について研究しています．
      </li>
      <li>
        研究インターン, オムロンサイニックエックス: 2021/12 - 現在
        <br />
        インタラクティブなスポーツの行動経済学:卓球を例とした分析フレームワークの構築
      </li>
      <li>
        テクニカルスタッフ, 産業技術総合研究所: 2018/07 - 2021/12
        <br />
        <a href="http://gesture-interface.jp/gesture-interface/" className="text-blue-500 hover:underline">重度運動機能障害者支援のためのジェスチャインタフェースの研究開発</a>
        <br />
        <a href="http://www.disaster-medutainment.jp/" className="text-blue-500 hover:underline">市民と共に進める災害医療救護訓練プログラムの実装</a>
      </li>
    </ul>
  </div>
);

// Awards Component
const Awards: React.FC = () => (
  <div className="bg-white p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-4">Awards</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>
        <a href="https://enpit.coins.tsukuba.ac.jp/tsukubaws2020/" className="text-blue-500 hover:underline">2020年度 enPiT 筑波大ワークショップ</a>
        <br />
        作品名: <a href="https://hobeeeeee.netlify.app/" className="text-blue-500 hover:underline">Hobeeeeee!!</a>
        <br />
        優秀賞, <strong>最優秀賞</strong>, <strong>情報理工学位プログラムリーダー特別表彰</strong>, 2021/01
        <br />
        <a href="https://speakerdeck.com/mei28/cheng-guo-fa-biao-hui-seeeeee-d" className="text-blue-500 hover:underline">スライド</a>
      </li>
      <li>
        <a href="https://prtimes.jp/main/html/rd/p/000000091.000055900.html" className="text-blue-500 hover:underline">NYLE HACKATHON IN TSUKUBA 2021</a>
        <br />
        作品名: <a href="https://chat-gun.herokuapp.com/" className="text-blue-500 hover:underline">Chat-gun</a>
        <br />
        <strong>最優秀賞</strong>, 2021/07
        <br />
        <a href="https://speakerdeck.com/mei28/nyle-hackathon-2021-4adb903b-8b70-45a7-87da-a0b5f00abfed" className="text-blue-500 hover:underline">スライド</a>
      </li>
    </ul>
  </div>
);

// Activities Component
const Activities: React.FC = () => (
  <div className="bg-white p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-4">Activities</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>スタッフ, つくばSKIPアカデミー: 2018, 2019/02</li>
      <li>ボランティアスタッフ, Unite Tokyo2019: 2019/09</li>
      <li>留学生チューター, 筑波大学: 2019/04 - 2019/09</li>
    </ul>
  </div>
);

// Applications Component
const Applications: React.FC = () => (
  <div className="bg-white p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-4">Applications</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>
        災害医療クエスト
        <a href="https://play.google.com/store/apps/details?id=go.aist.DMQuest" className="text-blue-500 hover:underline">[Android]</a> /
        <a href="https://apps.apple.com/jp/app/zai-hai-yi-liaoquest/id1139119937" className="text-blue-500 hover:underline">[iOS]</a>
      </li>
      <li>
        災害医療タッチ
        <a href="https://play.google.com/store/apps/details?id=go.aist.DMTouch" className="text-blue-500 hover:underline">[Android]</a> /
        <a href="https://apps.apple.com/jp/app/zai-hai-yi-liaotatchi/id1139091258" className="text-blue-500 hover:underline">[iOS]</a>
      </li>
      <li>
        <a href="http://gesture-interface.jp/download/gesture_music/" className="text-blue-500 hover:underline">ジェスチャーインターフェース</a>
      </li>
      <li>
        SKYLock: RaspberryPiと自作アンドロイドアプリを組み合わせて利用する，スマートロック＋インターホンのアプリケーションです。
        <br />
        <a href="https://www.rs-online.com/designspark/skylock-jp" className="text-blue-500 hover:underline">[DESIGNSPARK]</a> /
        <a href="https://github.com/mei28/SKY_LOCK" className="text-blue-500 hover:underline">[GitHub]</a>
      </li>
      <li>
        Hobeeeeee!!
        <a href="https://hobeeeeee.netlify.app/" className="text-blue-500 hover:underline">[Hobeeeeee!!]</a> /
        <a href="https://github.com/enpitut2020/Hobeeeeee" className="text-blue-500 hover:underline">[GitHub]</a>
      </li>
      <li>
        PocketMentor: 既存のTODOアプリとは違い，ユーザのモチベーションを刺激してやることを消化するように促すことで有意義な休日の実現を目指します。
        <br />
        <a href="https://twitter.com/MentorPocket" className="text-blue-500 hover:underline">[公式TwitterBot]</a> /
        <a href="https://github.com/enpitut2020/PocketMentor" className="text-blue-500 hover:underline">[GitHub]</a>
      </li>
    </ul>
  </div>
);

// Qualifications Component
const Qualifications: React.FC = () => (
  <div className="bg-white p-8 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-4">Qualifications</h2>
    <ul className="list-disc list-inside text-gray-700">
      <li>普通自動車免許 取得, 2016/09</li>
      <li>基本情報技術者 合格, 2017/04</li>
      <li>CGエンジニア検定ベーシック 合格, 2017/12</li>
      <li>日本語能力試験N1 満点合格, 2020/12</li>
      <li>実践的ITカリキュラム 修了, 2021/03</li>
    </ul>
  </div>
);

const AllAbouts: React.FC = () => {
  ReactGA.send({
    hintType: 'pageview',
    page: '/all-about',
    title: 'about page'
  })
  return (
    <section id="all-about" className="my-8 px-4 py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-12">About Me</h1>

      <Profile />
      <Accounts />
      <Education />
      <WorkExperience />
      <Awards />
      <Activities />
      <Applications />
      <Qualifications />

      <div className="text-center mt-8">
        <a href="/" className="inline-block px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">
          <FontAwesomeIcon icon={faAnglesLeft} className="ml-2" /> Back to Home
        </a>
      </div>
    </section>
  );
};

export default AllAbouts;

