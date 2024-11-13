import React from 'react';
import { Box, Text, VStack, HStack, Link as UILink, Icon, Button, useColorModeValue } from '@yamada-ui/react';
import { Github, Globe, User, ArrowLeft, Presentation } from '@yamada-ui/lucide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle, faAtlassian, faSpeakerDeck } from '@fortawesome/free-brands-svg-icons';
import ReactGA from 'react-ga4';

const Profile: React.FC = () => (
  <Box bg={useColorModeValue('white', 'gray.800')} p="8" rounded="lg" shadow="md" mb="8">
    <Text fontSize="2xl" fontWeight="semibold" mb="4">Profile</Text>
    <VStack align="start" gap={3} color={useColorModeValue('gray.700', 'gray.300')}>
      <Text>東京大学 総合文化研究科 広域科学専攻 広域システム科学系 博士後期課程 3年</Text>
      <Text>東京大学 馬場研究室</Text>
      <Text>
        mail: <span className="font-mono">mingzhe-yang [at] g.ecc.u-tokyo.ac.jp</span>
      </Text>
    </VStack>
  </Box>
);

const Accounts: React.FC = () => (
  <Box bg={useColorModeValue('white', 'gray.800')} p="8" rounded="lg" shadow="md" mb="8">
    <Text fontSize="2xl" fontWeight="semibold" mb="4">Accounts</Text>
    <HStack gap={4} wrap="wrap">
      <UILink href="https://github.com/mei28" color={useColorModeValue('gray.600', 'gray.300')} _hover={{ color: useColorModeValue('black', 'white') }}>
        <Icon as={Github} boxSize={5} mr="2" /> GitHub
      </UILink>
      <UILink href="https://qiita.com/mei28" color={useColorModeValue('gray.600', 'gray.300')} _hover={{ color: useColorModeValue('black', 'white') }}>
        <Icon as={User} boxSize={5} mr="2" /> Qiita
      </UILink>
      <UILink href="https://www.kaggle.com/mei2828" color={useColorModeValue('gray.600', 'gray.300')} _hover={{ color: useColorModeValue('black', 'white') }}>
        <FontAwesomeIcon icon={faKaggle} style={{ marginRight: '0.5rem' }} /> Kaggle
      </UILink>
      <UILink href="https://atcoder.jp/users/mei28" color={useColorModeValue('gray.600', 'gray.300')} _hover={{ color: useColorModeValue('black', 'white') }}>
        <FontAwesomeIcon icon={faAtlassian} style={{ marginRight: '0.5rem' }} /> AtCoder
      </UILink>
      <UILink href="https://speakerdeck.com/mei28" color={useColorModeValue('gray.600', 'gray.300')} _hover={{ color: useColorModeValue('black', 'white') }}>
        <FontAwesomeIcon icon={faSpeakerDeck} style={{ marginRight: '0.5rem' }} /> Speaker Deck
      </UILink>
    </HStack>
  </Box>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <Box bg={useColorModeValue('white', 'gray.800')} p="8" rounded="lg" shadow="md" mb="8">
    <Text fontSize="2xl" fontWeight="semibold" mb="4">{title}</Text>
    <VStack align="start" gap={3} color={useColorModeValue('gray.700', 'gray.300')}>
      {children}
    </VStack>
  </Box>
);

const AllAbouts: React.FC = () => {
  ReactGA.send({ hitType: 'pageview', page: '/all-about', title: 'about page' });

  return (
    <Box as="section" id="all-about" py="24" px="4" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Text as="h1" fontSize="3xl" fontWeight="bold" textAlign="center" mb="12" color={useColorModeValue('gray.800', 'white')}>
        About Me
      </Text>

      <Profile />
      <Accounts />

      <Section title="Education">
        <Text>
          <strong>博士 (学術)</strong>, 2022/10 - 2025/09 (予定)
          <br />
          <UILink href="https://system.c.u-tokyo.ac.jp/" color="blue.500" _hover={{ textDecoration: 'underline' }}>
            東京大学総合文化研究科広域科学専攻広域システム科学系
          </UILink>
          <br />
          指導教員: <UILink href="http://yukinobaba.jp/" color="blue.500" _hover={{ textDecoration: 'underline' }}>馬場雪乃</UILink>
        </Text>
        <Text>
          <strong>修士 (工学)</strong>, 2020/04 - 2022/03
          <br />
          <UILink href="https://www.cs.tsukuba.ac.jp/" color="blue.500" _hover={{ textDecoration: 'underline' }}>
            筑波大学理工情報生命学術院システム情報工学研究群情報理工学位プログラム
          </UILink>
          <br />
          修士論文: 「公平な判断に向けた公平性配慮型機械学習を用いた機械教示」
        </Text>
        <Text>
          <strong>学士 (情報工学)</strong>, 2016/04 - 2020/03
          <br />
          <UILink href="https://www.coins.tsukuba.ac.jp/" color="blue.500" _hover={{ textDecoration: 'underline' }}>
            筑波大学情報学群情報科学類
          </UILink>
          <br />
          卒業論文: 「教師なし機械教示」
        </Text>
      </Section>

      <Section title="Work Experience">
        <Text>リサーチアシスタント, 筑波大学: 2020/04 - 2022/06</Text>
        <Text>研究インターン, オムロンサイニックエックス: 2021/12 - 現在</Text>
        <Text>テクニカルスタッフ, 産業技術総合研究所: 2018/07 - 2021/12</Text>
      </Section>

      <Section title="Awards">
        <Text>
          <UILink href="https://enpit.coins.tsukuba.ac.jp/tsukubaws2020/" color="blue.500" _hover={{ textDecoration: 'underline' }}>
            2020年度 enPiT 筑波大ワークショップ
          </UILink>
          <br />
          作品名: <UILink href="https://hobeeeeee.netlify.app/" color="blue.500" _hover={{ textDecoration: 'underline' }}>Hobeeeeee!!</UILink>
          <br />
          優秀賞, 最優秀賞, 情報理工学位プログラムリーダー特別表彰, 2021/01
        </Text>
        <Text>
          <UILink href="https://prtimes.jp/main/html/rd/p/000000091.000055900.html" color="blue.500" _hover={{ textDecoration: 'underline' }}>
            NYLE HACKATHON IN TSUKUBA 2021
          </UILink>
          <br />
          作品名: <UILink href="https://chat-gun.herokuapp.com/" color="blue.500" _hover={{ textDecoration: 'underline' }}>Chat-gun</UILink>
          <br />
          最優秀賞, 2021/07
        </Text>
      </Section>

      <Section title="Activities">
        <Text>スタッフ, つくばSKIPアカデミー: 2018, 2019/02</Text>
        <Text>ボランティアスタッフ, Unite Tokyo2019: 2019/09</Text>
        <Text>留学生チューター, 筑波大学: 2019/04 - 2019/09</Text>
        <Text>Yamada-UIメンテナ: 2024/09 - 現在</Text>
      </Section>

      <Section title="Applications">
        <Text>
          災害医療クエスト
          <UILink href="https://play.google.com/store/apps/details?id=go.aist.DMQuest" color="blue.500" _hover={{ textDecoration: 'underline' }}>[Android]</UILink> /
          <UILink href="https://apps.apple.com/jp/app/zai-hai-yi-liaoquest/id1139119937" color="blue.500" _hover={{ textDecoration: 'underline' }}>[iOS]</UILink>
        </Text>
        <Text>
          災害医療タッチ
          <UILink href="https://play.google.com/store/apps/details?id=go.aist.DMTouch" color="blue.500" _hover={{ textDecoration: 'underline' }}>[Android]</UILink> /
          <UILink href="https://apps.apple.com/jp/app/zai-hai-yi-liaotatchi/id1139091258" color="blue.500" _hover={{ textDecoration: 'underline' }}>[iOS]</UILink>
        </Text>
        <Text>
          <UILink href="http://gesture-interface.jp/download/gesture_music/" color="blue.500" _hover={{ textDecoration: 'underline' }}>ジェスチャーインターフェース</UILink>
        </Text>
        <Text>
          SKYLock: RaspberryPiと自作アンドロイドアプリを組み合わせて利用する，スマートロック＋インターホンのアプリケーションです。
          <UILink href="https://www.rs-online.com/designspark/skylock-jp" color="blue.500" _hover={{ textDecoration: 'underline' }}>[DESIGNSPARK]</UILink> /
          <UILink href="https://github.com/mei28/SKY_LOCK" color="blue.500" _hover={{ textDecoration: 'underline' }}>[GitHub]</UILink>
        </Text>
      </Section>

      <Section title="Qualifications">
        <Text>普通自動車免許 取得, 2016/09</Text>
        <Text>基本情報技術者 合格, 2017/04</Text>
        <Text>CGエンジニア検定ベーシック 合格, 2017/12</Text>
        <Text>日本語能力試験N1 満点合格, 2020/12</Text>
        <Text>実践的ITカリキュラム 修了, 2021/03</Text>
        <Text>乙種第4類危険物取扱者免状 取得, 2024/09</Text>
      </Section>

      <HStack justify="center" mt="8">
        <Button as={UILink} href="/" leftIcon={<Icon as={ArrowLeft} />} colorScheme="gray">
          Back to Home
        </Button>
      </HStack>
    </Box>
  );
};

export default AllAbouts;

