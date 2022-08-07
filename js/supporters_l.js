'use strict'

// リストシャッフル
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function template_apply(template, data, dir) {
  if (!template) { return; }
  for (let datum of data) {
    const content = template.clone(true);
    content.find(".img").attr("style", `background-image: url("images/${dir}/${datum.img}");`);
    content.find(".name").text(datum.name);
    content.find(".link").attr("href", datum.link);
    content.find(".message").text(datum.message);
    content.find(".role").text(datum.role);
    template.before(content);
  }
  template.remove();
}

template_apply($(".template_sup_c2_shuffle"), shuffle(getSupportesC2()), "supporters");
template_apply($(".template_sup_c2"), getSupportesC2(), "supporters");
template_apply($(".template_sup_c1"), getSupportesC1(), "supporters");
template_apply($(".template_sup_a2"), getSupportesA2(), "supporters");
template_apply($(".template_members"), getMembers(), "members");
template_apply($(".template_stock_creators"), getStockCreators(), "members");


// 自動切換
setInterval(function () {
  const buttons = $(".owl-dot");
  if(buttons) {
    const idx = Math.floor(Math.random() * (buttons.length-1));
    $(".owl-dot")[idx].click();
  }
}, 7000);

function getSupportesC2() {
  return [
    {
      "name": "匿名希望",
      "message": "Vtuber界を大いに盛り上げる画期的な企画だと思います！1Vtuberファンとして応援しています、頑張ってください！",
      "link": "#",
      "img": "noimage.jpg"
    },
    {
      "name": "天神 照",
      "message": "デザイナー様VTuber、双方にとって必要な一冊になることを願って。",
      "link": "https://twitter.com/Amagami_Teras",
      "img": "Amagami_Teras.jpg"
    },
    {
      "name": "佐藤さん@お寿司食べたい",
      "message": "デザイン力、なんぼあっても良いですからね。",
      "link": "https://twitter.com/tanoseesaw",
      "img": "tanoseesaw.jpg"
    },
    {
      "name": "Aco Kogatari",
      "message": "とても素敵な企画だと感じました！皆様の活動を応援しております……！",
      "link": "https://twitter.com/kogatariaco",
      "img": "kogatariaco.jpg"
    },
    {
      "name": "青井なす",
      "message": "知識が0の状態から、サムネやデザインに力を入れようと思っているときに出会ったのがこちらでした！ より良いものが完成するように応援しています！！",
      "link": "https://www.youtube.com/channel/UC5MRIoW-HfjTmSwhIbwuj6Q",
      "img": "nasuaoii.jpg"
    },
    {
      "name": "花傘あるみ",
      "message": "お絵描き系Vtuberとして活動中です。 Vtuberとクリエイターのための素敵な企画ありがとうございます！ 英語圏に向けて発信もしているのでとても助かりました🥳",
      "link": "https://www.youtube.com/c/ArumiHanagasa",
      "img": "ArumiHanagasa.jpg"
    },
    {
      "name": "プレイボーン",
      "message": "デザインとはなんと難しいものか。たくさんの方がこの本を読んで、界隈全体のデザイン力がアップすればいいなと思います。私は後からついていきますのでよろしく。",
      "link": "https://twitter.com/VPlaybone",
      "img": "VPlaybone.jpg"
    },
    {
      "name": "君友ゆるし",
      "message": "君友はすべてのデザイナー及びクリエイターの皆様を心から応援しております♡",
      "link": "https://www.youtube.com/channel/UCfcMCHWc7DmnuLuusOZI_aw",
      "img": "KimitomoJurusxi.jpg"
    },
    {
      "name": "北乃えこー",
      "message": "沢山のクリエイターが溢れるこの界隈で、新しいクリエイター様に巡り会える良い機会をありがとうございます。私も見つけてもらえたらいいなと願いつつご支援いたします！",
      "link": "https://www.youtube.com/c/EchoNorth",
      "img": "EchoNorth.jpg"
    },
    {
      "name": "すぎうり",
      "message": "デザインのノウハウは勉強しづらく大変でした。素晴らしいハウツー本をありがとうございます！",
      "link": "#",
      "img": "sugiuri.jpg"
    },
    {
      "name": "tayama0324",
      "message": "VTuberデザインブックの上梓おめでとうございます！この本はVTuberだけでなく、プレゼンテーションをするすべての人に役立つものと確信しています。",
      "link": "https://twitter.com/tayama0324",
      "img": "tayama0324.jpg"
    },
    {
      "name": "桐崎まゆら",
      "message": "デザインで悩む私のようなVtuberにとっては神のような企画です！うれしい！！",
      "link": "https://twitter.com/mayura_____v",
      "img": "mayura_____v.jpg"
    },
    {
      "name": "んまった",
      "message": "切り抜き動画作成を通じて、Vtuberさんの活動を応援しております。本プロジェクトが、素晴らしい形で結実することを祈念申し上げます。",
      "link": "https://www.youtube.com/c/umatter_clips",
      "img": "umatter_clips.jpg"
    },
    {
      "name": "ふじしゃん",
      "message": "毎日楽しく拝見させていただいている VTuber の方々がより良い配信ライフを送れることを願っています！",
      "link": "https://twitter.com/fujiwaraizuho",
      "img": "fujiwaraizuho.jpg"
    },
    {
      "name": "如月雪兎",
      "message": "素晴らしい企画をありがとう。 大切に読ませていただきたいと思っております。",
      "link": "https://twitter.com/tako0846",
      "img": "tako0846.jpg"
    },
    {
      "name": "たと/たとちゃんねる",
      "message": "この本を参考にいろいろやってみたいと思います！",
      "link": "https://www.youtube.com/channel/UCz0YN_0DyfHoRh43L7YEh4A",
      "img": "TATO.jpg"
    },
    {
      "name": "くぐつ ひな",
      "message": "ご活躍されてる皆様のデザインをいっぺんに見ることができて、届くのが楽しみです！",
      "link": "https://twitter.com/Kugutsu_Hina",
      "img": "Kugutsu_Hina.jpg"
    },
    {
      "name": "鵺咬とと",
      "message": "珍獣軍人Vの鵺咬（やがむ）ととです！このデザインブックは、活動者なら喉から手が出るほど欲しい情報がギュ〜ッと詰まった至高の一品です！是非、シリーズ化希望です！！",
      "link": "https://twitter.com/yagamu_chu3",
      "img": "yagamu_chu3.jpg"
    },
    {
      "name": "Miki",
      "message": "デザインが詰まった1冊！配信者でも、サムネイルを作る編集者も絶対手に入れた方がいいと思い購入させて頂きました！ 素敵な企画でワクワクします！完成が楽しみです！",
      "link": "https://twitter.com/miki_villains",
      "img": "miki_villains.jpg"
    },
    {
      "name": "七星の星騎士",
      "message": "面白い人がサムネや配信画面の見映えで埋もれてしまうのはあまりにも惜しいので応援させていただきます。",
      "link": "#",
      "img": "noimage.jpg"
    },
    {
      "name": "東雲 運命",
      "message": "何でもできるさえちゃんの新作！！これは期待が高まる・・・！",
      "link": "https://twitter.com/sadameshinonome",
      "img": "noimage.jpg"
    },
    {
      "name": "ふみあき",
      "message": "デザインセンス皆無でもVTuberになりたい笑 冊子の到着をとても楽しみにしています！ワクワクです！",
      "link": "https://vshoku.com/",
      "img": "vshoku.jpg"
    },
    {
      "name": "しりうす",
      "message": "OMG SO HELPFUL ちょうど切らしてた！助かる！泣ける！",
      "link": "https://twitter.com/SiriusArc7",
      "img": "SiriusArc7.jpg"
    },
    {
      "name": "胡桃もここ",
      "message": "この度は、『VTuberデザインブック』発刊おめでとうございます！！これで今日から最強デザインサムネや配信が作れる！！YATTA！",
      "link": "https://twitter.com/kurumi_mokoko",
      "img": "kurumi_mokoko.jpg"
    },
    {
      "name": "やぶさめ りょうま",
      "message": "VTuber向けのデザイン本と聞いて、気になったので支援させていただきました！ とても楽しみにしています！頑張ってください！参考にさせてもらいます！",
      "link": "https://www.youtube.com/channel/UCaINMeCRB3imgr27jG9gOVQ",
      "img": "ryoma_dq.jpg"
    },
    {
      "name": "向坂",
      "message": "Vtuber業界の益々のご発展を願って！",
      "link": "https://twitter.com/ko_saka",
      "img": "ko_saka.jpg"
    },
    {
      "name": "イグゼ",
      "message": "これを読めば脱・初心者？？でも初心忘るべからずなので今日も初放送です。",
      "link": "https://twitter.com/ykt_zero_exe",
      "img": "ykt_zero_exe.jpg"
    },
    {
      "name": "じーーーな",
      "message": "完成楽しみにしております〜",
      "link": "https://twitter.com/Gienah",
      "img": "Gienah.jpg"
    },
    {
      "name": "むくどりん",
      "message": "誰もが なりたい自分で生きていける。そんなVTuber業界のさらなる発展につながるこの企画をとっても応援しています！",
      "link": "https://twitter.com/mukudorion",
      "img": "mukudorion.jpg"
    },
    {
      "name": "つくもデザイン",
      "message": "VTuber界のクリエイティブを盛り上げてください！",
      "link": "https://twitter.com/tukumo_design",
      "img": "tukumo_design.jpg"
    },
    {
      "name": "桐海めかぶ🌊🔫",
      "message": "新人Vtuberの桐海めかぶです！考えることが大好きで、みんなをクッッソ笑顔にするべく活動しているよ！💪💪僕もこちらの本でデザインを学んで活かします〜！✨✨",
      "link": "https://twitter.com/Kirimi_Mekabu",
      "img": "Kirimi_Mekabu.jpg"
    },
    {
      "name": "またたび しいな",
      "message": "Vtuberとして使うデザインの情報まとめたものがあったら…！！と思っていたので、非常にありがたいです！ ぜひ活用して素敵なサムネや配信画面をつくっていきたいと思います。応援してます！！",
      "link": "https://www.youtube.com/c/shinaCH/",
      "img": "shinaCH.jpg"
    },
    {
      "name": "夜天エトア(よあめ えとあ)",
      "message": "圧倒的集合知！Vtuber垂涎の一冊がここに！「サムネがないから配信できない」が通用しなくなっちゃうかも……！？",
      "link": "https://www.youtube.com/channel/UCX__8hg_jXudaS3DmOrTCeg",
      "img": "Yoame_Etoa.jpg"
    },
    {
      "name": "すばやい",
      "message": "微力ながらご支援させていただきました。この素晴らしいプロジェクトによるVtuber業界のさらなる発展を願っています！",
      "link": "https://twitter.com/quicksubayai",
      "img": "quicksubayai.jpg"
    },
    {
      "name": "にゃも猫＠地球侵略宇宙ネコ",
      "message": "VTuber動画の編集を始めてから、デザインに行き詰まることが多く、勉強したいと思っていました。デザインブックの完成、楽しみにしています！",
      "link": "https://twitter.com/nyaisury",
      "img": "nyaisury.jpg"
    },
    {
      "name": "anodesign",
      "message": "この本を見た方が、デザインに対しての意識が変わるきっかけになれば良いですね。 応援します。がんばってください。",
      "link": "https://anodesign.jp/",
      "img": "anodesign.jpg"
    },
    {
      "name": "遊蔵コウ＠バ美肉お兄さん",
      "message": "サムネイル作成やイラストの発注方法などこれからVtuverを目指す方にも参考になればいいと思います。また、Vtuverには欠かせないデザイナー様等の助けになれるような1冊になることを祈っております。",
      "link": "https://twitter.com/kou_yukura",
      "img": "kou_yukura.jpg"
    },
    {
      "name": "せな",
      "message": "このような内容を取り扱った資料集はなかなか見つからないため、とても楽しみにしています。手元に届くのが待ち遠しいです。",
      "link": "#",
      "img": "sena.jpg"
    },
    {
      "name": "かめわし",
      "message": "このようなデザインブックが出るのを待っていました！大いに参考にさせて頂きますね( *¯ ꒳¯*)",
      "link": "https://twitter.com/kamewashi?t=N_5pw9N-07iXj1EsDbau4Q&s=09",
      "img": "kamewashi.jpg"
    },
    {
      "name": "みゅうみゅう",
      "message": "クリエイターの皆様、VTuberやVライバーとして活動している皆様、見えないところで支えてくださっている皆様、全ての方を応援しています。",
      "link": "#",
      "img": "myumyu.jpg"
    },
    {
      "name": "那津三ケイト",
      "message": "Youtubeでの配信素材やデザインについてギュッと詰まった1冊。これを手にしない訳にはいかない…",
      "link": "https://m.youtube.com/channel/UC3bc6ZXogVkcT2ojZTvICng",
      "img": "Natsumi_Keito.jpg"
    },
    {
      "name": "穂波なつき",
      "message": "サムネや配信画面のデザインに特化した本はあまり無いため大変楽しみにしています。作業お忙しいかと思いますががんばってください！",
      "link": "https://twitter.com/honami_natsuki",
      "img": "honami_natsuki.jpg"
    },
    {
      "name": "ながともデザイン",
      "message": "この度はご出版おめでとうございます！ 『こういう本があったらな…』をピンポイントでまとめた本になってると思います。 今後のVtuberの発展を祈っております！",
      "link": "https://twitter.com/DesignNagatomo",
      "img": "DesignNagatomo.jpg"
    },
    {
      "name": "爆速けふこ",
      "message": "デザイン面でVtuberを支えたいデザイナーの皆様と、日々配信活動のクオリティアップを目指しているVtuberの皆様に届けばいいなと思います！",
      "link": "https://twitter.com/tiipull_trpg",
      "img": "tiipull_trpg.jpg"
    },
    {
      "name": "桜音 エリカ",
      "message": "この度はご出版、誠におめでとうございます。 VTuberさんをとりまく素敵なデザインが詰まった宝箱のような作品集、とても楽しみにしておりました*°",
      "link": "Twitter：https://twitter.com/ELika_oO\nYoutubeチャンネル：https://onl.sc/p63NFtp?",
      "img": "ELika_oO.jpg"
    },
    {
      "name": "あまなっと",
      "message": "Vtuberにとって避けては通れないサムネ、配信画面、ロゴ作成のためのスタンダードバイブルになるよう、応援しています！",
      "link": "https://www.youtube.com/channel/UC5GXaklTNT4VlC_Z6OcQjtw",
      "img": "amanatto_ch.jpg"
    },
    {
      "name": "hero",
      "message": "We support you in the future!",
      "link": "#",
      "img": "noimage.jpg"
    },
    {
      "name": "動く点P(ゼラ)",
      "message": "ささやかながら応援させていただきます！ 自分が石油王であれば、もっと上のプランで応援できたと思うともどかしいです。",
      "link": "https://lit.link/ugopizera",
      "img": "ugopizera.jpg"
    },
    {
      "name": "ユウでたまご",
      "message": "ＶＴｕｂｅｒさん向けのデザインブックということで、私が知らないことがたくさん載っていそうだと思い支援に参加させていただきました。皆さんの活動を応援しています！",
      "link": "#",
      "img": "uyudetamago.jpg"
    },
    {
      "name": "くー",
      "message": "VTuberの世界がさらに広がることを願ってます！",
      "link": "#",
      "img": "noimage.jpg"
    },
    {
      "name": "雪餅ののめ",
      "message": "大好きなクリエイターの皆様が一堂に会するということで支援せずにはいられませんでした！皆様の今後のクリエイティブ活動がますます素敵なものになることをお祈り申し上げます！",
      "link": "https://youtube.com/channel/UC31ADEhSrPUMP9MCsbRhdLg",
      "img": "yukimochi_nonome.jpg"
    },
    {
      "name": "てぴ",
      "message": "この企画をきっかけに、デザインでVTuber界隈をより一層盛り上げていけるのではないかととても期待しています。応援しています。",
      "link": "#",
      "img": "tepi.jpg"
    },
    {
      "name": "にぅい",
      "message": "VTuber活動の中で、日々あらゆるデザインに頭を悩ませています……。そんな迷える羊を救済する素晴らしい企画をありがとうございます！ 応援してます！！",
      "link": "https://youtube.com/c/niui3gv",
      "img": "niui3gv.jpg"
    },
    {
      "name": "黒崎こぎん",
      "message": "いっぱい読んでいっぱい技術を盗んでいこうと思います！！",
      "link": "https://www.youtube.com/c/KuroKogin_ch",
      "img": "KuroKogin_ch.jpg"
    },
    {
      "name": "神馬(屍)",
      "message": "全てのクリエイター、全ての配信が救われる一冊になりますように",
      "link": "#",
      "img": "Kitaaki_Tube_AK.jpg"
    },
    {
      "name": "坂久梨哀葉",
      "message": "こんな便利な資料集ちょうど欲しかった！ Vtuberの皆さんやクリエイターの皆さん、これからも頑張ってください！",
      "link": "https://twitter.com/sakakuri_a",
      "img": "sakakuri_a.jpg"
    },
    {
      "name": "とまれちゃん（Vウォーカー）",
      "message": "ありそうでなかった、VTuber向けのデザイン本！実際に前線で活躍しているメンバーが参加しているということなので、今から手に取るのが待ち遠しいです。わくわく！",
      "link": "https://v-walker.jp/",
      "img": "v-walker.jpg"
    },
    {
      "name": "ユト",
      "message": "絶対冊子欲しい！と思てたです。とってもたのしみしてます。ぼくの応援、すこしでも助けになたらうれしい！ですっ",
      "link": "https://twitter.com/yuto_vts",
      "img": "yuto_vts.jpg"
    },
    {
      "name": "りんりん",
      "message": "こんな素敵な企画があるなんて！クリエイターのみなさまの愛がいっぱいつまった作品のたからばこ！たのしみです！",
      "link": "https://twitter.com/ringring_room",
      "img": "ringring_room.jpg"
    },
    {
      "name": "つつつつつ",
      "message": "素敵な技術の詰まった1冊…！皆様の制作が、活動が、世界に広がりますように！",
      "link": "https://twitter.com/Tsu_ga_goko",
      "img": "Tsu_ga_goko.jpg"
    },
    {
      "name": "十重ゐら",
      "message": "どんなゲームでもホラゲーのように遊ぶ十重ゐら（Toeira）です！サムネつくりや今後の活動の知識つけたいため応援しました！一緒に頑張りましょう！",
      "link": "https://www.youtube.com/channel/UCtEc5pLBUv1gO1mnFOuhXCg",
      "img": "ToeiraVtuber.jpg"
    },
    {
      "name": "白河ノさくら",
      "message": "私自身もデザイン等クリエイティブ活動をしているので、ありがたく拝見させていただきます。これからも、デザイナー様方の益々のご活躍を祈念いたしております！",
      "link": "https://twitter.com/sacura0610",
      "img": "sacura0610.jpg"
    },
    {
      "name": "チェイル",
      "message": "購入頂いたクリエイター全てがステップアップできることを応援してます！私もマイペースにやっていきますよ！",
      "link": "#",
      "img": "cheil.jpg"
    },
    {
      "name": "秋月ルコ",
      "message": "とっても楽しみです！",
      "link": "http://fez.boy.jp/ab/",
      "img": "_luco.jpg"
    },
    {
      "name": "むさし",
      "message": "とても面白い試みだと思い支援させて頂きました！ 色々なデザインを見れるのを楽しみにしています！",
      "link": "https://twitter.com/orange634nty",
      "img": "orange634nty.jpg"
    },
    {
      "name": "蘇芳陽かよ（あめかよ）",
      "message": "VTuber準備中として現在活動している中、わからないことだらけでこの冊子はとても助けになります。 作成して頂き、感謝です！",
      "link": "https://twitter.com/kayodana?",
      "img": "kayodana.jpg"
    },
    {
      "name": "狐白汐音",
      "message": "妖狐系Vtuberの汐音です♪ゲーム配信を中心に活動しています。 とても素敵な企画本当にありがとうございます。サムネ等に活用させていただければと思っています。",
      "link": "https://twitter.com/Shion_Kohaku_",
      "img": "Shion_Kohaku_.jpg"
    },
    {
      "name": "ろき",
      "message": "これを読んでいる皆様、この素敵な本で、更なるデザインの発見や新たなクリエイター様やVTuber様との出会いを楽しんでください！発売おめでとうございます！",
      "link": "https://twitter.com/roki_oxo",
      "img": "roki_oxo.jpg"
    }
  ];
}

function getSupportesC1() {
  return [
    {
      "name": "clea_Vtuber",
      "link": "https://twitter.com/clea_vtuber"
    },
    {
      "name": "tetsu",
      "link": "http://otto858.com/"
    },
    {
      "name": "弥勒",
      "link": "https://youtube.com/c/Mitras"
    },
    {
      "name": "Sousaka_Aoi",
      "link": "https://twitter.com/Sousaka_Aoi"
    },
    {
      "name": "sin",
      "link": "#"
    },
    {
      "name": "百合野蒼空",
      "link": "https://twitter.com/Yurino_Sora"
    },
    {
      "name": "板影くおん@Vtuber",
      "link": "https://twitter.com/ItakageKuon"
    },
    {
      "name": "天草フラン",
      "link": "https://twitter.com/amakusa_fran"
    },
    {
      "name": "糟屋もふ（かすやもふ）",
      "link": "https://twitter.com/KasuyaMofu"
    },
    {
      "name": "ヨナカ",
      "link": "https://www.youtube.com/c/yonaka_game"
    },
    {
      "name": "珈琲の人",
      "link": "https://twitter.com/mr_coffee1003"
    },
    {
      "name": "夢乃ほのか",
      "link": "https://twitter.com/honoka_yumeno"
    },
    {
      "name": "天傘ている",
      "link": "https://twitter.com/AmagasaTale"
    },
    {
      "name": "ケン/ken",
      "link": "https://twitter.com/ken_tcmf"
    },
    {
      "name": "DD Erikson",
      "link": "https://twitter.com/AKYM21"
    },
    {
      "name": "寿々華",
      "link": "https://twitter.com/suzuka_mell"
    },
    {
      "name": "伊達一弘 氏",
      "link": "https://twitter.com/kutita_hoshi"
    },
    {
      "name": "夜枕ギリー",
      "link": "https://www.youtube.com/c/gillieyomakura"
    },
    {
      "name": "ゆるっとチャンネル",
      "link": "https://youtube.com/channel/UC4Lg-WH_7XRlZ95K_AiOtmw"
    },
    {
      "name": "さしこ",
      "link": "https://www.youtube.com/c/sasistudio/"
    },
    {
      "name": "rinto.",
      "link": "https://twitter.com/rinto__z"
    },
    {
      "name": "サブクマ",
      "link": "#"
    },
    {
      "name": "LUCAS",
      "link": "https://www.youtube.com/channel/UCvcQcNTD7FbXbnvrzcXixcA"
    },
    {
      "name": "oxxPickyxxo",
      "link": "#"
    },
    {
      "name": "聞喜遊音",
      "link": "https://youtube.com/channel/UC7HMrMA14Htl1ngK1950Yog"
    },
    {
      "name": "きすちぃ",
      "link": "https://twitter.com/Quisty"
    },
    {
      "name": "アサカデザイン",
      "link": "https://www.foriio.com/asaka44"
    },
    {
      "name": "猫月遥歩（ねこづきあゆむ）",
      "link": "https://www.nekozuki.me/"
    },
    {
      "name": "izm",
      "link": "https://github.com/neon-izm/Portfolio"
    },
    {
      "name": "先行投資",
      "link": "#"
    },
    {
      "name": "Geisha",
      "link": "https://twitter.com/takayayamamoto_"
    },
    {
      "name": "柴厡和寛",
      "link": "https://twitter.com/ShibaharaKzhr"
    },
    {
      "name": "月李シンシア*",
      "link": "https://twitter.com/TUKI_44a_cr"
    },
    {
      "name": "AB",
      "link": "#"
    },
    {
      "name": "つゆみそ",
      "link": "https://twitter.com/tuyumiso0"
    },
    {
      "name": "Heizo_Gaming",
      "link": "https://mobile.twitter.com/Heizo_Gaming"
    },
    {
      "name": "みたりんこ",
      "link": "https://twitter.com/mitaringo"
    },
    {
      "name": "S_Kei",
      "link": "#"
    },
    {
      "name": "てじり",
      "link": "https://www.youtube.com/channel/UCPeJsIz0fNwiHVBGjuoxeIw"
    },
    {
      "name": "コノ",
      "link": "https://youtube.com/channel/UCry4-UrEK3C6vP90rE9Ethg"
    },
    {
      "name": "コタロー",
      "link": "https://www.youtube.com/channel/UCP5JWvSgNw6lXDqQTpfG7lA"
    },
    {
      "name": "かわみや かなえ",
      "link": "https://youtube.com/channel/UCj4YSdu-gQasZ2culddP4bg"
    },
    {
      "name": "朱銅あかね",
      "link": "https://twitter.com/akagane_akane"
    },
    {
      "name": "雨宿れいん",
      "link": "https://youtube.com/channel/UCNZHLeBjtWAIpgh-LONoBHA"
    },
    {
      "name": "hainoyume",
      "link": "https://hainoyume.com"
    },
    {
      "name": "霧島響希",
      "link": "https://twitter.com/Kirishima_stack"
    },
    {
      "name": "隠牙リツ",
      "link": "https://twitter.com/Causality_Ritsu"
    },
    {
      "name": "符守マナ",
      "link": "https://twitter.com/Fumana_fumamori"
    },
    {
      "name": "ことり ゆうい",
      "link": "https://twitter.com/kotoriYOUI"
    },
    {
      "name": "善哉ILLUST&DESIGN",
      "link": "https://yokikana.myportfolio.com/"
    },
    {
      "name": "宇宙地ゆめ",
      "link": "https://twitter.com/src_yume"
    },
    {
      "name": "あるしろ",
      "link": "https://soundcloud.com/arushiro"
    },
    {
      "name": "になきち",
      "link": "https://twitter.com/ninagawamoon"
    },
    {
      "name": "ゆれいき",
      "link": "#"
    },
    {
      "name": "maŸUko",
      "link": "https://twitter.com/mayuko2525"
    },
    {
      "name": "メカニカルごーと",
      "link": "https://twitter.com/goat_mechanical"
    },
    {
      "name": "眞宮悠里",
      "link": "#"
    },
    {
      "name": "jacky",
      "link": "#"
    },
    {
      "name": "Gomatama",
      "link": "#"
    },
    {
      "name": "ふじゅ@fuju9981",
      "link": "https://www.youtube.com/channel/UC5B2VjU2iHes6l3Yw7G99AA"
    },
    {
      "name": "やちか",
      "link": "https://yachikach.wixsite.com/mysite"
    },
    {
      "name": "怪談朗読VTuber月子",
      "link": "https://www.youtube.com/c/tsukikochannel"
    },
    {
      "name": "桃空しいな",
      "link": "https://twitter.com/v_momosorasiina"
    },
    {
      "name": "みやざわはじめ",
      "link": "https://www.youtube.com/channel/UCFzk2zAHo4nLhjVN-ae2MSA"
    },
    {
      "name": "二条あまね",
      "link": "https://youtube.com/channel/UCNXcIXiKfqRXoQgw5H-e1GA"
    },
    {
      "name": "拙者K",
      "link": "https://twitter.com/sessha_ci4"
    },
    {
      "name": "水心ととの",
      "link": "https://twitter.com/totono_726"
    },
    {
      "name": "ツミヤマ ヨム",
      "link": "https://twitter.com/tsumiyama_yom"
    },
    {
      "name": "味覚",
      "link": "https://twitter.com/mii0102_"
    },
    {
      "name": "りめろん",
      "link": "#"
    },
    {
      "name": "中岡なあか",
      "link": "youtube.com/c/naakachan"
    },
    {
      "name": "tajimang",
      "link": "#"
    },
    {
      "name": "すなふね",
      "link": "https://twitter.com/sunafune"
    },
    {
      "name": "ユエリア・ローザレット",
      "link": "https://twitter.com/yueria_rozalet"
    },
    {
      "name": "コトバ",
      "link": "https://twitter.com/ibanezaf75bs"
    },
    {
      "name": "朱城碧音",
      "link": "https://twitter.com/Aoto_21g"
    },
    {
      "name": "双葉いちか",
      "link": "https://twitter.com/2taba1ka"
    },
    {
      "name": "ロリ高ツッキー/米田凌梧",
      "link": "https://twitter.com/tukisima081325"
    },
    {
      "name": "高垣",
      "link": "https://tmm-design.work/"
    },
    {
      "name": "凪乃ましろ",
      "link": "https://twitter.com/nagino_mashiro"
    },
    {
      "name": "橘花あんり",
      "link": "https://twitter.com/V_Anri_T"
    },
    {
      "name": "城戸エリク",
      "link": "https://twitter.com/Kido_Eric_V"
    },
    {
      "name": "火ノ守鍊華",
      "link": "https://twitter.com/hnmr_rng"
    },
    {
      "name": "TDK ROTTERDAM",
      "link": "https://twitter.com/TDK_ROTTERDAM"
    },
    {
      "name": "奈々瀬ひかげ",
      "link": "https://www.youtube.com/channel/UCu5yCEYvYDz020eKXzFCH9g"
    },
    {
      "name": "柘榴石(ざくろいし)ザクロ",
      "link": "https://mobile.twitter.com/zakuroish1"
    },
    {
      "name": "鈴森やしろ",
      "link": "https://twitter.com/suzumoriyashiro"
    },
    {
      "name": "みちょこ",
      "link": "https://twitter.com/michocolate"
    },
    {
      "name": "今永さらら",
      "link": "https://youtube.com/channel/UC1UAYydPszpYVJabWriQl1A?sub_confirmation=1"
    },
    {
      "name": "けいろー",
      "link": "https://twitter.com/K16writer"
    },
    {
      "name": "雅王とらい",
      "link": "https://m.youtube.com/c/GAOTRYChannel"
    },
    {
      "name": "わんだーらすと",
      "link": "http://www.circle-wanderlust.com"
    },
    {
      "name": "星井まゆき",
      "link": "https://hoshiim.jimdofree.com/"
    },
    {
      "name": "御掬この子",
      "link": "https://twitter.com/konoko_okome"
    },
    {
      "name": "雨彗ユキ",
      "link": "https://twitter.com/AmehokiYuki"
    },
    {
      "name": "坂道のぼる",
      "link": "https://twitter.com/noboru_skmc"
    },
    {
      "name": "akky",
      "link": "#"
    },
    {
      "name": "四方木ヨモ",
      "link": "https://youtube.com/channel/UCv4QavPkw0TiZYfBgK3ltvg"
    }
  ];
}


function getSupportesA2() {
  return [
    {
      "name": "さわむらしゅんいち"
    },
    {
      "name": "スコラボ"
    },
    {
      "name": "mbaharip"
    },
    {
      "name": "縁べりお"
    },
    {
      "name": "ひつじの大家さん"
    },
    {
      "name": "小福"
    },
    {
      "name": "けいと。"
    },
    {
      "name": "nao550"
    },
    {
      "name": "音々愛メウ"
    },
    {
      "name": "ミキマキ"
    },
    {
      "name": "毒野モモコ"
    },
    {
      "name": "夜見ベルノ"
    },
    {
      "name": "藻谷スリップ"
    },
    {
      "name": "海老真夜中"
    },
    {
      "name": "ずんだもち"
    },
    {
      "name": "龍道"
    },
    {
      "name": "かがぴー"
    },
    {
      "name": "天満ニア"
    },
    {
      "name": "いゆに@IyuniMin"
    },
    {
      "name": "シュウ"
    },
    {
      "name": "한민구"
    },
    {
      "name": "みゅうみゅう"
    },
    {
      "name": "指折灯"
    },
    {
      "name": "giw"
    },
    {
      "name": "いちろー"
    },
    {
      "name": "紫翠とーん"
    },
    {
      "name": "うむー"
    },
    {
      "name": "YOKA"
    },
    {
      "name": "Nonas"
    },
    {
      "name": "涼川リト"
    },
    {
      "name": "いぶか"
    },
    {
      "name": "逢夢つあ（あいむつあ）"
    },
    {
      "name": "八ッ橋しなもん"
    },
    {
      "name": "わふーお"
    },
    {
      "name": "野良クリ"
    },
    {
      "name": "星奈クロエ"
    },
    {
      "name": "誘宵幽月"
    },
    {
      "name": "白むく"
    },
    {
      "name": "喜多束あずき"
    },
    {
      "name": "平向名"
    },
    {
      "name": "狼赫まかみ"
    },
    {
      "name": "ワッカ"
    },
    {
      "name": "ソニリア"
    },
    {
      "name": "u_chan38"
    },
    {
      "name": "Buu"
    },
    {
      "name": "ケニー"
    },
    {
      "name": "AL-9110"
    },
    {
      "name": "深街ミドリ"
    },
    {
      "name": "夢咲いちか-VTuber-"
    },
    {
      "name": "しらき"
    },
    {
      "name": "振音こはる"
    },
    {
      "name": "pompomBGW"
    },
    {
      "name": "ラヴゾンビ"
    },
    {
      "name": "青兎るきな"
    },
    {
      "name": "封華"
    },
    {
      "name": "汐田"
    },
    {
      "name": "梁葵かおる"
    }
  ];
}

function getMembers() {
  return [
    {
      "name": "小栗さえ",
      "role": "著者/発行/編集",
      "link": "https://twitter.com/OkuriSae",
      "img": "sae.png"
    },
    {
      "name": "蓬莱軒",
      "role": "チーフデザイン",
      "link": "https://twitter.com/HoraiChan",
      "img": "hourai.png"
    },
    {
      "name": "モンブラン",
      "role": "デザイナー",
      "link": "https://twitter.com/MontBlanc04",
      "img": "momb.png"
    },
    {
      "name": "kentax",
      "role": "デザイナー",
      "link": "https://twitter.com/kentax",
      "img": "kentax.png"
    },
    {
      "name": "須賀サカキ",
      "role": "デザイナー",
      "link": "https://twitter.com/sukasaka_v",
      "img": "sakaki.png"
    },
    {
      "name": "きぬた博士",
      "role": "デザイナー",
      "link": "https://twitter.com/DrKinuta_tuber",
      "img": "kinuta.png"
    },
    {
      "name": "ごごん",
      "role": "デザイナー",
      "link": "https://twitter.com/gogon_illust",
      "img": "gogon.png"
    },
    {
      "name": "uo",
      "role": "デザイナー",
      "link": "https://twitter.com/pukapuka_o",
      "img": "uo.png"
    },
    {
      "name": "唐揚丸",
      "role": "デザイナー",
      "link": "https://twitter.com/karaagemaru0002",
      "img": "karaage.png"
    },
    {
      "name": "清涼院ラムネ",
      "role": "デザイナー",
      "link": "https://twitter.com/seiryoin_ramune",
      "img": "ramune.png"
    },
    {
      "name": "9egg9",
      "role": "デザイナー",
      "link": "https://twitter.com/9egg9",
      "img": "9egg9.png"
    },
    {
      "name": "OKUMONO",
      "role": "デザイナー",
      "link": "https://twitter.com/okumono1",
      "img": "okumono.png"
    },
    {
      "name": "あやの紫苑",
      "role": "デザイナー",
      "link": "https://twitter.com/ayanosion",
      "img": "ayano.png"
    },
    {
      "name": "うさねこメモリー",
      "role": "デザイナー",
      "link": "https://twitter.com/usanekomemory",
      "img": "usaneko.png"
    },
    {
      "name": "かに",
      "role": "デザイナー",
      "link": "https://twitter.com/wekapico",
      "img": "kani.png"
    },
    {
      "name": "めりぃぱめりぃ",
      "role": "デザイナー",
      "link": "https://twitter.com/merrypamerry",
      "img": "mery.png"
    },
    {
      "name": "九埜",
      "role": "デザイナー",
      "link": "https://twitter.com/kuno_to_yomu",
      "img": "kuno.png"
    },
    {
      "name": "素材屋あいりす",
      "role": "デザイナー",
      "link": "https://twitter.com/sozaiyairis",
      "img": "iris.png"
    },
    {
      "name": "苺花ゆい",
      "role": "デザイナー",
      "link": "https://twitter.com/1kaUi___",
      "img": "ichika.png"
    },
    {
      "name": "八瀬すずか",
      "role": "広報制作",
      "link": "https://twitter.com/yase25suzuka",
      "img": "suzuka.png"
    },
    {
      "name": "胡桃もここ",
      "role": "制作スタッフ",
      "link": "https://twitter.com/kurumi_mokoko",
      "img": "mokoko.png"
    },
    {
      "name": "tayama",
      "role": "制作スタッフ",
      "link": "https://twitter.com/tayama0324",
      "img": "tayama.png"
    },
    {
      "name": "さだめ",
      "role": "制作スタッフ",
      "link": "https://twitter.com/sadameshinonome",
      "img": "sadame.png"
    },
    {
      "name": "Sirius",
      "role": "制作スタッフ",
      "link": "https://twitter.com/SiriusArc7",
      "img": "sirius.png"
    }
  ];
}

function getStockCreators() {
  return [
    {
      "name": "唐揚丸",
      "role": "デザイナー",
      "link": "https://twitter.com/karaagemaru0002",
      "img": "karaage.png"
    },
    {
      "name": "kentax",
      "role": "デザイナー",
      "link": "https://twitter.com/kentax",
      "img": "kentax.png"
    },
    {
      "name": "清涼院ラムネ",
      "role": "デザイナー",
      "link": "https://twitter.com/seiryoin_ramune",
      "img": "ramune.png"
    },
    {
      "name": "OKUMONO",
      "role": "デザイナー",
      "link": "https://twitter.com/okumono1",
      "img": "okumono.png"
    },
    {
      "name": "うさねこメモリー",
      "role": "デザイナー",
      "link": "https://twitter.com/usanekomemory",
      "img": "usaneko.png"
    },
    {
      "name": "めりぃぱめりぃ",
      "role": "デザイナー",
      "link": "https://twitter.com/merrypamerry",
      "img": "mery.png"
    },
    {
      "name": "九埜",
      "role": "デザイナー",
      "link": "https://twitter.com/kuno_to_yomu",
      "img": "kuno.png"
    },
    {
      "name": "あやの紫苑",
      "role": "デザイナー",
      "link": "https://twitter.com/ayanosion",
      "img": "ayano.png"
    },
    {
      "name": "素材屋あいりす",
      "role": "デザイナー",
      "link": "https://twitter.com/sozaiyairis",
      "img": "iris.png"
    },
    {
      "name": "苺花ゆい",
      "role": "デザイナー",
      "link": "https://twitter.com/1kaUi___",
      "img": "ichika.png"
    },
    {
      "name": "9egg9",
      "role": "デザイナー",
      "link": "https://twitter.com/9egg9",
      "img": "9egg9.png"
    }
  ];
}