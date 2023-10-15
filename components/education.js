import NextLink from 'next/link';
import { Link } from "@chakra-ui/react";

function Education() {
  const educationData = [
    {
      degree: "博士 (学術)",
      period: "2022/10 - 2025/09 (予定)",
      institution: "東京大学総合文化研究科広域科学専攻広域システム科学系",
      institutionLink: "https://system.c.u-tokyo.ac.jp/",
      advisor: "馬場雪乃准教授",
      advisorLink: "http://yukinobaba.jp/",
      papertype: "博士論文",
    },
    {
      degree: "修士 (工学)",
      period: "2020/04 - 2022/03",
      institution: "筑波大学理工情報生命学術院システム情報工学研究群情報理工学位プログラム",
      institutionLink: "https://www.cs.tsukuba.ac.jp/",
      thesis: "公平な判断に向けた公平性配慮型機械学習を用いた機械教示",
      advisor: "馬場雪乃准教授",
      advisorLink: "http://yukinobaba.jp/",
      papertype: "博士論文",
    },
    {
      degree: "学士 (情報工学)",
      period: "2016/04 - 2020/03",
      institution: "筑波大学情報学群情報科学類",
      institutionLink: "https://www.coins.tsukuba.ac.jp/",
      thesis: "教師なし機械教示",
      advisor: "馬場雪乃准教授",
      advisorLink: "http://yukinobaba.jp/",
      papertype: "卒業論文",
    },
  ];

  return (
    <section>
      {educationData.map((edu, idx) => (
        <p key={idx} style={{ marginBottom: "16px" }}>
          <strong>{edu.degree}</strong>, {edu.period}<br />
          <Link as={NextLink} href={edu.institutionLink}>
            {edu.institution}
          </Link><br />
          {edu.thesis && (
            <>
              {edu.papertype}: 「{edu.thesis}」<br />
            </>
          )}
          指導教員:{" "}
          <Link as={NextLink} href={edu.advisorLink}>
            {edu.advisor}
          </Link>
        </p>
      ))
      }
    </section >
  );
}

export default Education;

