"use strict"



const gQuestData = {
    animals: [
        {
            id: 16,
            itemName: "dog",
            text: { en: "dog", he: "כלב" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419942/TinyTalkers/items_img/animals/dog_jua6s4.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500368/TinyTalkers/items_audio/animals/en/dog_ebkm6z.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500467/TinyTalkers/items_audio/animals/he/dog_bvk8uk.mp3"
            },
            isCorrect: false
        },
        {
            id: 9,
            itemName: "cat",
            text: { en: "cat", he: "חתול" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419937/TinyTalkers/items_img/animals/cat_rvbtrd.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500352/TinyTalkers/items_audio/animals/en/cat_kgr5qu.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500486/TinyTalkers/items_audio/animals/he/cat_tyl3nd.mp3"
            },
            isCorrect: false
        },
        {
            id: 11,
            itemName: "cow",
            text: { en: "cow", he: "פרה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419954/TinyTalkers/items_img/animals/cow_falxnb.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500356/TinyTalkers/items_audio/animals/en/cow_dkkb7y.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500490/TinyTalkers/items_audio/animals/he/cow_ianvkc.mp3"
            },
            isCorrect: false
        },
        {
            id: 19,
            itemName: "duck",
            text: { en: "duck", he: "ברווז" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419954/TinyTalkers/items_img/animals/duck_kcyy4c.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500373/TinyTalkers/items_audio/animals/en/duck_k2ux4z.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500500/TinyTalkers/items_audio/animals/he/duck_j7rwic.mp3"
            },
            isCorrect: false
        },
        {
            id: 53,
            itemName: "spider",
            text: { en: "spider", he: "עכביש" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419970/TinyTalkers/items_img/animals/spider_up6pks.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500439/TinyTalkers/items_audio/animals/en/spider_ibxrkf.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500546/TinyTalkers/items_audio/animals/he/spider_bfwaqf.mp3"
            },
            isCorrect: false
        },
        {
            id: 1,
            itemName: "ant",
            text: { en: "ant", he: "נמלה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419933/TinyTalkers/items_img/animals/ant_kqldk1.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500337/TinyTalkers/items_audio/animals/en/ant_n5glm3.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500459/TinyTalkers/items_audio/animals/he/ant_wzpnrz.mp3"
            },
            isCorrect: false
        },
        {
            id: 2,
            itemName: "bat",
            text: { en: "bat", he: "עטלף" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419934/TinyTalkers/items_img/animals/bat_jhguts.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500339/TinyTalkers/items_audio/animals/en/bat_wvnj8e.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500463/TinyTalkers/items_audio/animals/he/bat_w6lhjh.mp3"
            },
            isCorrect: false
        },
        {
            id: 3,
            itemName: "bear",
            text: { en: "bear", he: "דוב" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419945/TinyTalkers/items_img/animals/bear_vo9axf.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500341/TinyTalkers/items_audio/animals/en/bear_mvf2ln.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500461/TinyTalkers/items_audio/animals/he/bear_tqrojf.mp3"
            },
            isCorrect: false
        },
        {
            id: 4,
            itemName: "bee",
            text: { en: "bee", he: "דבורה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419937/TinyTalkers/items_img/animals/bee_fwbf93.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500343/TinyTalkers/items_audio/animals/en/bee_cx1eci.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500473/TinyTalkers/items_audio/animals/he/bee_qv8lp2.mp3"
            },
            isCorrect: false
        },
        {
            id: 5,
            itemName: "beetle",
            text: { en: "beetle", he: "חיפושית" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419936/TinyTalkers/items_img/animals/beetle_xeexn1.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500345/TinyTalkers/items_audio/animals/en/beetle_oy7ira.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500483/TinyTalkers/items_audio/animals/he/beetle_sifxlw.mp3"
            },
            isCorrect: false
        },
        {
            id: 6,
            itemName: "bird",
            text: { en: "bird", he: "ציפור" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419935/TinyTalkers/items_img/animals/bird_hlvxgk.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500347/TinyTalkers/items_audio/animals/en/bird_lpzph1.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500481/TinyTalkers/items_audio/animals/he/bird_s0jmw1.mp3"
            },
            isCorrect: false
        },
        {
            id: 7,
            itemName: "butterfly",
            text: { en: "butterfly", he: "פרפר" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419935/TinyTalkers/items_img/animals/butterfly_axhpmh.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500349/TinyTalkers/items_audio/animals/en/butterfly_cbdze3.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500484/TinyTalkers/items_audio/animals/he/butterfly_un51lj.mp3"
            },
            isCorrect: false
        },
        {
            id: 8,
            itemName: "camel",
            text: { en: "camel", he: "גמל" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419942/TinyTalkers/items_img/animals/camel_dwvq9c.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500351/TinyTalkers/items_audio/animals/en/camel_xwe16a.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500492/TinyTalkers/items_audio/animals/he/camel_emw9qu.mp3"
            },
            isCorrect: false
        },
        {
            id: 10,
            itemName: "chick",
            text: { en: "chick", he: "אפרוח" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419938/TinyTalkers/items_img/animals/chick_suhbwe.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500354/TinyTalkers/items_audio/animals/en/chick_rl6aat.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500488/TinyTalkers/items_audio/animals/he/chick_yvmejb.mp3"
            },
            isCorrect: false
        },
        {
            id: 12,
            itemName: "crab",
            text: { en: "crab", he: "סרטן" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419944/TinyTalkers/items_img/animals/crab_zjtqll.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500358/TinyTalkers/items_audio/animals/en/crab_xx7ohx.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721543787/TinyTalkers/items_audio/animals/he/crab_wrumwv.mp3"
            },
            isCorrect: false
        },
        {
            id: 13,
            itemName: "crow",
            text: { en: "crow", he: "עורב" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419940/TinyTalkers/items_img/animals/crow_nrfjg3.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500362/TinyTalkers/items_audio/animals/en/crow_ebiwai.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500498/TinyTalkers/items_audio/animals/he/crow_drci1o.mp3"
            },
            isCorrect: false
        },
        {
            id: 14,
            itemName: "deer",
            text: { en: "deer", he: "צבי" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419940/TinyTalkers/items_img/animals/deer_oay9in.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500364/TinyTalkers/items_audio/animals/en/deer_n7tdtf.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721543791/TinyTalkers/items_audio/animals/he/deer_pm07x2.mp3"
            },
            isCorrect: false
        },
        {
            id: 15,
            itemName: "dinosaur",
            text: { en: "dinosaur", he: "דינוזאור" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419941/TinyTalkers/items_img/animals/dinosaur_zuqjgc.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500366/TinyTalkers/items_audio/animals/en/dinosaur_nh2uru.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500494/TinyTalkers/items_audio/animals/he/dinosaur_lggycn.mp3"
            },
            isCorrect: false
        },
        {
            id: 17,
            itemName: "dolphin",
            text: { en: "dolphin", he: "דולפין" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419944/TinyTalkers/items_img/animals/dolphin_uzlrlc.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500370/TinyTalkers/items_audio/animals/en/dolphin_m7tsl3.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500502/TinyTalkers/items_audio/animals/he/dolphin_hhic0j.mp3"
            },
            isCorrect: false
        },
        {
            id: 18,
            itemName: "donkey",
            text: { en: "donkey", he: "חמור" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419978/TinyTalkers/items_img/animals/donkey_cjk758.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500372/TinyTalkers/items_audio/animals/en/donkey_to9ikp.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500506/TinyTalkers/items_audio/animals/he/donkey_d4yk9w.mp3"
            },
            isCorrect: false
        },
        {
            id: 20,
            itemName: "eagle",
            text: { en: "eagle", he: "נשר" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419958/TinyTalkers/items_img/animals/eagle_e0vsmj.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500377/TinyTalkers/items_audio/animals/en/eagle_e7kkqb.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500519/TinyTalkers/items_audio/animals/he/eagle_ic2kow.mp3"
            },
            isCorrect: false
        },
        {
            id: 21,
            itemName: "elephant",
            text: { en: "elephant", he: "פיל" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419947/TinyTalkers/items_img/animals/elephant_onkhu0.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500375/TinyTalkers/items_audio/animals/en/elephant_vnrjkr.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500469/TinyTalkers/items_audio/animals/he/elephant_bclyjq.mp3"
            },
            isCorrect: false
        },
        {
            id: 22,
            itemName: "fish",
            text: { en: "fish", he: "דג" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419945/TinyTalkers/items_img/animals/fish_pfszbp.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500379/TinyTalkers/items_audio/animals/en/fish_oafdgu.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500504/TinyTalkers/items_audio/animals/he/fish_hqdchy.mp3"
            },
            isCorrect: false
        },
        {
            id: 23,
            itemName: "fox",
            text: { en: "fox", he: "שועל" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419947/TinyTalkers/items_img/animals/fox_hdoyfs.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500381/TinyTalkers/items_audio/animals/en/fox_yf8mka.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500508/TinyTalkers/items_audio/animals/he/fox_juhaq4.mp3"
            },
            isCorrect: false
        },
        {
            id: 24,
            itemName: "frog",
            text: { en: "frog", he: "צפרדע" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419950/TinyTalkers/items_img/animals/frog_anrpmp.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500383/TinyTalkers/items_audio/animals/en/frog_pyibol.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500513/TinyTalkers/items_audio/animals/he/frog_kh8k0c.mp3"
            },
            isCorrect: false
        },
        {
            id: 25,
            itemName: "giraffe",
            text: { en: "giraffe", he: "ג'ירפה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419972/TinyTalkers/items_img/animals/giraffe_x1f7su.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500385/TinyTalkers/items_audio/animals/en/giraffe_ecw82k.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500517/TinyTalkers/items_audio/animals/he/giraffe_ogubyy.mp3"
            },
            isCorrect: false
        },
        {
            id: 26,
            itemName: "goat",
            text: { en: "goat", he: "תיש" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419959/TinyTalkers/items_img/animals/goat_bcf3ym.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500387/TinyTalkers/items_audio/animals/en/goat_cqdrgf.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721543797/TinyTalkers/items_audio/animals/he/goat_u5lkoe.mp3"
            },
            isCorrect: false
        },
        {
            id: 27,
            itemName: "gorilla",
            text: { en: "gorilla", he: "גורילה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419956/TinyTalkers/items_img/animals/gorilla_iyb716.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500390/TinyTalkers/items_audio/animals/en/gorilla_acmaaz.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500509/TinyTalkers/items_audio/animals/he/gorilla_gow1rd.mp3"
            },
            isCorrect: false
        },
        {
            id: 28,
            itemName: "hedgehog",
            text: { en: "hedgehog", he: "קיפוד" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419959/TinyTalkers/items_img/animals/hedgehog_n7lzco.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500391/TinyTalkers/items_audio/animals/en/hedgehog_o9tb16.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500521/TinyTalkers/items_audio/animals/he/hedgehog_rm6x4d.mp3"
            },
            isCorrect: false
        },
        {
            id: 29,
            itemName: "hippo",
            text: { en: "hippo", he: "היפופוטם" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721503140/TinyTalkers/items_img/animals/hippo_yedjf4.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500393/TinyTalkers/items_audio/animals/en/hippo_yineoz.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500515/TinyTalkers/items_audio/animals/he/hippo_wauu4c.mp3"
            },
            isCorrect: false
        },
        {
            id: 30,
            itemName: "horse",
            text: { en: "horse", he: "סוס" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419951/TinyTalkers/items_img/animals/horse_lg4bld.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500394/TinyTalkers/items_audio/animals/en/horse_cczu71.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500511/TinyTalkers/items_audio/animals/he/horse_s0dcub.mp3"
            },
            isCorrect: false
        },
        {
            id: 31,
            itemName: "jellyfish",
            text: { en: "jellyfish", he: "מדוזה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419949/TinyTalkers/items_img/animals/jellyfish_nkoz4x.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500396/TinyTalkers/items_audio/animals/en/jellyfish_x6kj5t.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500534/TinyTalkers/items_audio/animals/he/jellyfish_kyraw0.mp3"
            },
            isCorrect: false
        },
        {
            id: 32,
            itemName: "kangaroo",
            text: { en: "kangaroo", he: "קנגרו" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419955/TinyTalkers/items_img/animals/kangaroo_tjhfxj.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500398/TinyTalkers/items_audio/animals/en/kangaroo_cdg6k5.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721543803/TinyTalkers/items_audio/animals/he/kangaroo_ccfpus.mp3"
            },
            isCorrect: false
        },
        {
            id: 33,
            itemName: "lion",
            text: { en: "lion", he: "אריה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419953/TinyTalkers/items_img/animals/lion_pcr4ro.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500400/TinyTalkers/items_audio/animals/en/lion_vopd7v.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500532/TinyTalkers/items_audio/animals/he/lion_gy3uoh.mp3"
            },
            isCorrect: false
        },
        {
            id: 34,
            itemName: "monkey",
            text: { en: "monkey", he: "קוף" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419951/TinyTalkers/items_img/animals/monkey_vywehd.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500402/TinyTalkers/items_audio/animals/en/monkey_zsfj7c.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500527/TinyTalkers/items_audio/animals/he/monkey_fvefxn.mp3"
            },
            isCorrect: false
        },
        {
            id: 35,
            itemName: "mosquito",
            text: { en: "mosquito", he: "יתוש" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419961/TinyTalkers/items_img/animals/mosquito_oixkv6.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500404/TinyTalkers/items_audio/animals/en/mosquito_d84pxg.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721543808/TinyTalkers/items_audio/animals/he/mosquito_kj2ywq.mp3"
            },
            isCorrect: false
        },
        {
            id: 36,
            itemName: "mouse",
            text: { en: "mouse", he: "עכבר" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419960/TinyTalkers/items_img/animals/mouse_jgbf6s.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500406/TinyTalkers/items_audio/animals/en/mouse_j25x3g.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500530/TinyTalkers/items_audio/animals/he/mouse_bkxibh.mp3"
            },
            isCorrect: false
        },
        {
            id: 37,
            itemName: "octopus",
            text: { en: "octopus", he: "תמנון" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419964/TinyTalkers/items_img/animals/octopus_lglw2i.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500408/TinyTalkers/items_audio/animals/en/octopus_wq170i.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721543813/TinyTalkers/items_audio/animals/he/octopus_kdngyx.mp3"
            },
            isCorrect: false
        },
        {
            id: 38,
            itemName: "ostrich",
            text: { en: "ostrich", he: "יען" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419962/TinyTalkers/items_img/animals/ostrich_jvzodc.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500410/TinyTalkers/items_audio/animals/en/ostrich_mpmsrm.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721543819/TinyTalkers/items_audio/animals/he/ostrich_htyiom.mp3"
            },
            isCorrect: false
        },
        {
            id: 39,
            itemName: "owl",
            text: { en: "owl", he: "ינשוף" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419979/TinyTalkers/items_img/animals/owl_kz22fk.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500412/TinyTalkers/items_audio/animals/en/owl_lkzc2i.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721543824/TinyTalkers/items_audio/animals/he/owl_thcpot.mp3"
            },
            isCorrect: false
        },
        {
            id: 40,
            itemName: "parrot",
            text: { en: "parrot", he: "תוכי" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419957/TinyTalkers/items_img/animals/parrot_p1nn96.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500414/TinyTalkers/items_audio/animals/en/parrot_ofy1bm.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500475/TinyTalkers/items_audio/animals/he/parrot_vydlfc.mp3"
            },
            isCorrect: false
        },
        {
            id: 41,
            itemName: "peacock",
            text: { en: "peacock", he: "טווס" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419969/TinyTalkers/items_img/animals/peacock_dxstda.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500416/TinyTalkers/items_audio/animals/en/peacock_obeixv.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500523/TinyTalkers/items_audio/animals/he/peacock_bpwro2.mp3"
            },
            isCorrect: false
        },
        {
            id: 42,
            itemName: "pig",
            text: { en: "pig", he: "חזיר" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419977/TinyTalkers/items_img/animals/pig_pkei5k.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500419/TinyTalkers/items_audio/animals/en/pig_c8xiww.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721543828/TinyTalkers/items_audio/animals/he/pig_akjwld.mp3"
            },
            isCorrect: false
        },
        {
            id: 43,
            itemName: "pigeon",
            text: { en: "pigeon", he: "יונה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419963/TinyTalkers/items_img/animals/pigeon_uhkwxp.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500431/TinyTalkers/items_audio/animals/en/pigeon_tfiznl.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500477/TinyTalkers/items_audio/animals/he/pigeon_dfzs51.mp3"
            },
            isCorrect: false
        },
        {
            id: 44,
            itemName: "porcupine",
            text: { en: "porcupine", he: "דורבן" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419966/TinyTalkers/items_img/animals/porcupine_ucnpac.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500421/TinyTalkers/items_audio/animals/en/porcupine_fonuv5.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500525/TinyTalkers/items_audio/animals/he/porcupine_nke7yj.mp3"
            },
            isCorrect: false
        },
        {
            id: 45,
            itemName: "rabbit",
            text: { en: "rabbit", he: "ארנב" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419965/TinyTalkers/items_img/animals/rabbit_mancse.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500423/TinyTalkers/items_audio/animals/en/rabbit_eb5o8n.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500536/TinyTalkers/items_audio/animals/he/rabbit_jfandj.mp3"
            },
            isCorrect: false
        },
        {
            id: 46,
            itemName: "rooster",
            text: { en: "rooster", he: "תרנגול" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419968/TinyTalkers/items_img/animals/rooster_mju6qt.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500433/TinyTalkers/items_audio/animals/en/rooster_v0ffvb.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500529/TinyTalkers/items_audio/animals/he/rooster_nhnxrb.mp3"
            },
            isCorrect: false
        },
        {
            id: 47,
            itemName: "scorpion",
            text: { en: "scorpion", he: "עקרב" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419971/TinyTalkers/items_img/animals/scorpion_fusmxk.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500446/TinyTalkers/items_audio/animals/en/scorpion_croqab.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721543835/TinyTalkers/items_audio/animals/he/scorpion_evlkyg.mp3"
            },
            isCorrect: false
        },
        {
            id: 48,
            itemName: "seal",
            text: { en: "seal", he: "כלב-ים" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419979/TinyTalkers/items_img/animals/seal_xurq2j.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500425/TinyTalkers/items_audio/animals/en/seal_vsdoql.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721543841/TinyTalkers/items_audio/animals/he/seal_erd3ye.mp3"
            },
            isCorrect: false
        },
        {
            id: 49,
            itemName: "shark",
            text: { en: "shark", he: "כריש" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419981/TinyTalkers/items_img/animals/shark_ycauy0.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500429/TinyTalkers/items_audio/animals/en/shark_xbfdso.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500550/TinyTalkers/items_audio/animals/he/shark_mr7j68.mp3"
            },
            isCorrect: false
        },
        {
            id: 50,
            itemName: "sheep",
            text: { en: "sheep", he: "כבשה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419967/TinyTalkers/items_img/animals/sheep_f4cvjw.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500427/TinyTalkers/items_audio/animals/en/sheep_bkdcqy.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500540/TinyTalkers/items_audio/animals/he/sheep_viewhz.mp3"
            },
            isCorrect: false
        },
        {
            id: 51,
            itemName: "snail",
            text: { en: "snail", he: "חילזון" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419962/TinyTalkers/items_img/animals/snail_tmnljm.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500440/TinyTalkers/items_audio/animals/en/snail_uw1wwg.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500542/TinyTalkers/items_audio/animals/he/snail_hvyqor.mp3"
            },
            isCorrect: false
        },
        {
            id: 52,
            itemName: "snake",
            text: { en: "snake", he: "נחש" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419973/TinyTalkers/items_img/animals/snake_ingwrf.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500437/TinyTalkers/items_audio/animals/en/snake_ho45be.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500555/TinyTalkers/items_audio/animals/he/snake_lbrqfq.mp3"
            },
            isCorrect: false
        },
        {
            id: 54,
            itemName: "squirrel",
            text: { en: "squirrel", he: "סנאי" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419967/TinyTalkers/items_img/animals/squirrel_mpgdua.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500435/TinyTalkers/items_audio/animals/en/squirrel_x39ye9.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500538/TinyTalkers/items_audio/animals/he/squirrel_brg3av.mp3"
            },
            isCorrect: false
        },
        {
            id: 55,
            itemName: "starfish",
            text: { en: "starfish", he: "כוכב-ים" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419982/TinyTalkers/items_img/animals/starfish_okgwas.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500444/TinyTalkers/items_audio/animals/en/starfish_nwopni.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500544/TinyTalkers/items_audio/animals/he/starfish_ms1nye.mp3"
            },
            isCorrect: false
        },
        {
            id: 56,
            itemName: "swan",
            text: { en: "swan", he: "ברבור" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419971/TinyTalkers/items_img/animals/swan_ivimlh.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500454/TinyTalkers/items_audio/animals/en/swan_v1mtph.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500552/TinyTalkers/items_audio/animals/he/swan_vseitx.mp3"
            },
            isCorrect: false
        },
        {
            id: 57,
            itemName: "tiger",
            text: { en: "tiger", he: "נמר" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419975/TinyTalkers/items_img/animals/tiger_tk3i4j.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500452/TinyTalkers/items_audio/animals/en/tiger_viakhl.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500557/TinyTalkers/items_audio/animals/he/tiger_vzoq2y.mp3"
            },
            isCorrect: false
        },
        {
            id: 58,
            itemName: "turtle",
            text: { en: "turtle", he: "צב" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419952/TinyTalkers/items_img/animals/turtle_i1sabu.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500450/TinyTalkers/items_audio/animals/en/turtle_kfoxjp.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500561/TinyTalkers/items_audio/animals/he/turtle_pd75fy.mp3"
            },
            isCorrect: false
        },
        {
            id: 59,
            itemName: "unicorn",
            text: { en: "unicorn", he: "חד-קרן" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419974/TinyTalkers/items_img/animals/unicorn_xvgar3.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500471/TinyTalkers/items_audio/animals/en/unicorn_zne6jb.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500559/TinyTalkers/items_audio/animals/he/unicorn_b8jal0.mp3"
            },
            isCorrect: false
        },
        {
            id: 60,
            itemName: "whale",
            text: { en: "whale", he: "לוויתן" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419976/TinyTalkers/items_img/animals/whale_np3vlz.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500456/TinyTalkers/items_audio/animals/en/whale_xoemon.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500553/TinyTalkers/items_audio/animals/he/whale_dtacub.mp3"
            },
            isCorrect: false
        },
        {
            id: 61,
            itemName: "wolf",
            text: { en: "wolf", he: "זאב" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419980/TinyTalkers/items_img/animals/wolf_vmfz8p.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500458/TinyTalkers/items_audio/animals/en/wolf_zdpane.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500563/TinyTalkers/items_audio/animals/he/wolf_cm8s36.mp3"
            },
            isCorrect: false
        },
        {
            id: 62,
            itemName: "worm",
            text: { en: "worm", he: "תולעת" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419975/TinyTalkers/items_img/animals/worm_qlnbwb.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500448/TinyTalkers/items_audio/animals/en/worm_x5ucl8.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721543846/TinyTalkers/items_audio/animals/he/worm_djj8ci.mp3"
            },
            isCorrect: false
        },
        {
            id: 63,
            itemName: "zebra",
            text: { en: "zebra", he: "זברה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419982/TinyTalkers/items_img/animals/zebra_ddqj2b.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500465/TinyTalkers/items_audio/animals/en/zebra_bs2pzc.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500565/TinyTalkers/items_audio/animals/he/zebra_vwopbj.mp3"
            },
            isCorrect: false
        },
        {
            id: 64,
            itemName: "rhino",
            text: { en: "rhino", he: "קרנף" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721501695/TinyTalkers/items_img/animals/rhino_evwooz.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500442/TinyTalkers/items_audio/animals/en/rhino_mwm9ee.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500479/TinyTalkers/items_audio/animals/he/rhino_hje4yb.mp3"
            },
            isCorrect: false
        },
        {
            id: 65,
            itemName: "penguin",
            text: { en: "penguin", he: "פינגווין" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721502224/TinyTalkers/items_img/animals/penguin_uoxscr.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500417/TinyTalkers/items_audio/animals/en/penguin_xzt47r.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500548/TinyTalkers/items_audio/animals/he/penguin_y6mhsp.mp3"
            },
            isCorrect: false
        },
        {
            id: 66,
            itemName: "crocodile",
            text: { en: "crocodile", he: "תנין" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721502687/TinyTalkers/items_img/animals/crocodile_uoiymi.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500360/TinyTalkers/items_audio/animals/en/crocodile_wq7xik.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500496/TinyTalkers/items_audio/animals/he/crocodile_gyrtta.mp3"
            },
            isCorrect: false
        }
    ],
    fruits: [
        {
            id: 1,
            itemName: "apple",
            text: { en: "apple", he: "תפוח" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419868/TinyTalkers/items_img/fruits/apple_mgk2js.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420178/TinyTalkers/items_audio/fruits/en/apple_hiaqxn.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420216/TinyTalkers/items_audio/fruits/he/apple_eysomo.mp3"
            },
            isCorrect: false
        },
        {
            id: 2,
            itemName: "apricot",
            text: { en: "apricot", he: "משמש" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419863/TinyTalkers/items_img/fruits/apricot_r9wdf2.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420180/TinyTalkers/items_audio/fruits/en/apricot_kapi9t.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420219/TinyTalkers/items_audio/fruits/he/apricot_wz17e0.mp3"
            },
            isCorrect: false
        },
        {
            id: 3,
            itemName: "banana",
            text: { en: "banana", he: "בננה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419860/TinyTalkers/items_img/fruits/banana_qdgmid.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420181/TinyTalkers/items_audio/fruits/en/banana_qytjic.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420211/TinyTalkers/items_audio/fruits/he/banana_mkslnd.mp3"
            },
            isCorrect: false
        },
        {
            id: 4,
            itemName: "cherry",
            text: { en: "cherry", he: "דובדבן" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419860/TinyTalkers/items_img/fruits/cherry_p3t2yt.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420183/TinyTalkers/items_audio/fruits/en/cherry_e0qwq0.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420221/TinyTalkers/items_audio/fruits/he/cherry_b68qyl.mp3"
            },
            isCorrect: false
        },
        {
            id: 5,
            itemName: "coconut",
            text: { en: "coconut", he: "קוקוס" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419869/TinyTalkers/items_img/fruits/coconut_fw4afx.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420184/TinyTalkers/items_audio/fruits/en/coconut_uohqcg.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420226/TinyTalkers/items_audio/fruits/he/coconut_fj7cns.mp3"
            },
            isCorrect: false
        },
        {
            id: 6,
            itemName: "dates",
            text: { en: "dates", he: "תמר" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419865/TinyTalkers/items_img/fruits/dates_knyfzn.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420186/TinyTalkers/items_audio/fruits/en/dates_yu9ryb.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420205/TinyTalkers/items_audio/fruits/he/dates_iymtv2.mp3"
            },
            isCorrect: false
        },
        {
            id: 7,
            itemName: "grapes",
            text: { en: "grapes", he: "ענבים" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419864/TinyTalkers/items_img/fruits/grapes_mfwe0d.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420187/TinyTalkers/items_audio/fruits/en/grapes_w6dv1z.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420229/TinyTalkers/items_audio/fruits/he/grapes_f6g8xk.mp3"
            },
            isCorrect: false
        },
        {
            id: 8,
            itemName: "kiwi",
            text: { en: "kiwi", he: "קיווי" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419869/TinyTalkers/items_img/fruits/kiwi_y6gqw2.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420189/TinyTalkers/items_audio/fruits/en/kiwi_z1pmz4.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420223/TinyTalkers/items_audio/fruits/he/kiwi_ytxrtf.mp3"
            },
            isCorrect: false
        },
        {
            id: 9,
            itemName: "lemon",
            text: { en: "lemon", he: "לימון" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419861/TinyTalkers/items_img/fruits/lemon_ovt8lw.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420191/TinyTalkers/items_audio/fruits/en/lemon_jddyzs.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420218/TinyTalkers/items_audio/fruits/he/lemon_q78zc1.mp3"
            },
            isCorrect: false
        },
        {
            id: 10,
            itemName: "mango",
            text: { en: "mango", he: "מנגו" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419864/TinyTalkers/items_img/fruits/mango_r8zqwg.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420192/TinyTalkers/items_audio/fruits/en/mango_fxzpub.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420207/TinyTalkers/items_audio/fruits/he/mango_mproch.mp3"
            },
            isCorrect: false
        },
        {
            id: 11,
            itemName: "melon",
            text: { en: "melon", he: "מלון" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419866/TinyTalkers/items_img/fruits/melon_a9uqwa.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420194/TinyTalkers/items_audio/fruits/en/melon_qbb4uv.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420213/TinyTalkers/items_audio/fruits/he/melon_j6m8b4.mp3"
            },
            isCorrect: false
        },
        {
            id: 12,
            itemName: "orange",
            text: { en: "orange", he: "תפוז" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419870/TinyTalkers/items_img/fruits/orange_axkvw1.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420195/TinyTalkers/items_audio/fruits/en/orange_nhvuof.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420224/TinyTalkers/items_audio/fruits/he/orange_uybsnw.mp3"
            },
            isCorrect: false
        },
        {
            id: 13,
            itemName: "peach",
            text: { en: "peach", he: "אפרסק" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419865/TinyTalkers/items_img/fruits/peach_pztbhm.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420197/TinyTalkers/items_audio/fruits/en/peach_mirhna.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420227/TinyTalkers/items_audio/fruits/he/peach_zfjn9v.mp3"
            },
            isCorrect: false
        },
        {
            id: 14,
            itemName: "pear",
            text: { en: "pear", he: "אגס" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419861/TinyTalkers/items_img/fruits/pear_y42vlt.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420199/TinyTalkers/items_audio/fruits/en/pear_ksm4g4.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420230/TinyTalkers/items_audio/fruits/he/pear_zigxkg.mp3"
            },
            isCorrect: false
        },
        {
            id: 15,
            itemName: "pineapple",
            text: { en: "pineapple", he: "אננס" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419863/TinyTalkers/items_img/fruits/pineapple_sxhsge.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420202/TinyTalkers/items_audio/fruits/en/pineapple_ylaig0.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420232/TinyTalkers/items_audio/fruits/he/pineapple_hzptkc.mp3"
            },
            isCorrect: false
        },
        {
            id: 16,
            itemName: "plum",
            text: { en: "plum", he: "שזיף" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419867/TinyTalkers/items_img/fruits/plum_zex2ce.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420200/TinyTalkers/items_audio/fruits/en/plum_j4nx0o.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420234/TinyTalkers/items_audio/fruits/he/plum_eloc04.mp3"
            },
            isCorrect: false
        },
        {
            id: 17,
            itemName: "pomegranate",
            text: { en: "pomegranate", he: "רימון" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419868/TinyTalkers/items_img/fruits/pomegranate_qspbqv.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420203/TinyTalkers/items_audio/fruits/en/pomegranate_mpxkjy.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420235/TinyTalkers/items_audio/fruits/he/pomegranate_ts4f5j.mp3"
            },
            isCorrect: false
        },
        {
            id: 18,
            itemName: "strawberry",
            text: { en: "strawberry", he: "תות" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419862/TinyTalkers/items_img/fruits/strawberry_jibjg4.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420210/TinyTalkers/items_audio/fruits/en/strawberry_wxmesn.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420238/TinyTalkers/items_audio/fruits/he/strawberry_e6nqed.mp3"
            },
            isCorrect: false
        },
        {
            id: 19,
            itemName: "watermelon",
            text: { en: "watermelon", he: "אבטיח" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419866/TinyTalkers/items_img/fruits/watermelon_vvlihe.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420215/TinyTalkers/items_audio/fruits/en/watermelon_ucdxbp.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420240/TinyTalkers/items_audio/fruits/he/watermelon_thpaq4.mp3"
            },
            isCorrect: false
        },
    ],
    vegetables: [
        {
            id: 1,
            itemName: "avocado",
            text: { en: "avocado", he: "אבוקדו" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419900/TinyTalkers/items_img/vegetables/avocado_cxbvom.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500252/TinyTalkers/items_audio/vegetables/en/avocado_imm28x.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500284/TinyTalkers/items_audio/vegetables/he/avocado_rl9inm.mp3"
            },
            isCorrect: false
        },
        {
            id: 2,
            itemName: "broccoli",
            text: { en: "broccoli", he: "ברוקולי" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419899/TinyTalkers/items_img/vegetables/broccoli_gks2kc.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500253/TinyTalkers/items_audio/vegetables/en/broccoli_ivluwb.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500286/TinyTalkers/items_audio/vegetables/he/broccoli_ctbzcv.mp3"
            },
            isCorrect: false
        },
        {
            id: 3,
            itemName: "cabbage",
            text: { en: "cabbage", he: "כרוב" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419895/TinyTalkers/items_img/vegetables/cabbage_hf9wka.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500254/TinyTalkers/items_audio/vegetables/en/cabbage_ykg45f.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500288/TinyTalkers/items_audio/vegetables/he/cabbage_kxaf7k.mp3"
            },
            isCorrect: false
        },
        {
            id: 4,
            itemName: "carrot",
            text: { en: "carrot", he: "גזר" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419896/TinyTalkers/items_img/vegetables/carrot_iu4se1.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500256/TinyTalkers/items_audio/vegetables/en/carrot_vdztcz.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500290/TinyTalkers/items_audio/vegetables/he/carrot_qubggs.mp3"
            },
            isCorrect: false
        },
        {
            id: 5,
            itemName: "cauliflower",
            text: { en: "cauliflower", he: "כרובית" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419896/TinyTalkers/items_img/vegetables/cauliflower_xrh5yu.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500258/TinyTalkers/items_audio/vegetables/en/cauliflower_fbmlnf.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500292/TinyTalkers/items_audio/vegetables/he/cauliflower_ru3hwr.mp3"
            },
            isCorrect: false
        },
        {
            id: 6,
            itemName: "corn",
            text: { en: "corn", he: "תירס" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419899/TinyTalkers/items_img/vegetables/corn_k42xpa.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500260/TinyTalkers/items_audio/vegetables/en/corn_vzgiyi.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500294/TinyTalkers/items_audio/vegetables/he/corn_yurgpj.mp3"
            },
            isCorrect: false
        },
        {
            id: 7,
            itemName: "cucumber",
            text: { en: "cucumber", he: "מלפפון" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419905/TinyTalkers/items_img/vegetables/cucumber_v6nueo.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500262/TinyTalkers/items_audio/vegetables/en/cucumber_jcsxyd.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500295/TinyTalkers/items_audio/vegetables/he/cucumber_tatwa0.mp3"
            },
            isCorrect: false
        },
        {
            id: 8,
            itemName: "eggplant",
            text: { en: "eggplant", he: "חציל" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419904/TinyTalkers/items_img/vegetables/eggplant_k9gl9t.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500264/TinyTalkers/items_audio/vegetables/en/eggplant_uilncw.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500297/TinyTalkers/items_audio/vegetables/he/eggplant_jfrtvc.mp3"
            },
            isCorrect: false
        },
        {
            id: 9,
            itemName: "garlic",
            text: { en: "garlic", he: "שום" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419901/TinyTalkers/items_img/vegetables/garlic_vil1vj.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500266/TinyTalkers/items_audio/vegetables/en/garlic_efzryg.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500299/TinyTalkers/items_audio/vegetables/he/garlic_qh8exx.mp3"
            },
            isCorrect: false
        },
        {
            id: 10,
            itemName: "green_peas",
            text: { en: "green peas", he: "אפונה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419903/TinyTalkers/items_img/vegetables/green_peas_icbhod.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500267/TinyTalkers/items_audio/vegetables/en/green_peas_xgeuqd.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500301/TinyTalkers/items_audio/vegetables/he/green_peas_dfmwcs.mp3"
            },
            isCorrect: false
        },
        {
            id: 11,
            itemName: "lettuce",
            text: { en: "lettuce", he: "חסה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419906/TinyTalkers/items_img/vegetables/lettuce_aqyr9e.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500269/TinyTalkers/items_audio/vegetables/en/lettuce_pxiazs.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500303/TinyTalkers/items_audio/vegetables/he/lettuce_prim2v.mp3"
            },
            isCorrect: false
        },
        {
            id: 12,
            itemName: "mushroom",
            text: { en: "mushroom", he: "פטריות" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419903/TinyTalkers/items_img/vegetables/mushroom_vfuucn.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500271/TinyTalkers/items_audio/vegetables/en/mushroom_sxrhwl.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500305/TinyTalkers/items_audio/vegetables/he/mushroom_d4tl8e.mp3"
            },
            isCorrect: false
        },
        {
            id: 13,
            itemName: "olives",
            text: { en: "olives", he: "זיתים" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419905/TinyTalkers/items_img/vegetables/olives_y1nun0.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500273/TinyTalkers/items_audio/vegetables/en/olives_bo7cfp.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500306/TinyTalkers/items_audio/vegetables/he/olives_bffrl6.mp3"
            },
            isCorrect: false
        },
        {
            id: 14, itemName: "onion",
            text: { en: "onion", he: "בצל" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419897/TinyTalkers/items_img/vegetables/onion_vh7xbr.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500275/TinyTalkers/items_audio/vegetables/en/onion_cdgrbv.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500310/TinyTalkers/items_audio/vegetables/he/onion_mwpca7.mp3"
            },
            isCorrect: false
        },
        {
            id: 15, itemName: "pepper",
            text: { en: "pepper", he: "פלפל" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419902/TinyTalkers/items_img/vegetables/pepper_pgruun.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500277/TinyTalkers/items_audio/vegetables/en/pepper_py3zb4.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500308/TinyTalkers/items_audio/vegetables/he/pepper_ihhuta.mp3"
            },
            isCorrect: false
        },
        {
            id: 16, itemName: "potato",
            text: { en: "potato", he: "תפוח אדמה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419898/TinyTalkers/items_img/vegetables/potato_qfvwbd.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500279/TinyTalkers/items_audio/vegetables/en/potato_xzmsgw.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500312/TinyTalkers/items_audio/vegetables/he/potato_zsuziz.mp3"
            },
            isCorrect: false
        },
        {
            id: 17, itemName: "spinach",
            text: { en: "spinach", he: "תרד" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419906/TinyTalkers/items_img/vegetables/spinach_sw6duj.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500280/TinyTalkers/items_audio/vegetables/en/spinach_dz0a2u.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500314/TinyTalkers/items_audio/vegetables/he/spinach_xh2vjz.mp3"
            },
            isCorrect: false
        },
        {
            id: 18, itemName: "tomato",
            text: { en: "tomato", he: "עגבניה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419901/TinyTalkers/items_img/vegetables/tomato_f2gzof.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500282/TinyTalkers/items_audio/vegetables/en/tomato_xsmpcj.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721500316/TinyTalkers/items_audio/vegetables/he/tomato_gnv5xx.mp3"
            },
            isCorrect: false
        },
    ],
    colors: [
        {
            id: 1,
            itemName: "black",
            text: { en: "black", he: "שחור" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1722267677/TinyTalkers/items_img/colors/black_vknyc5.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420126/TinyTalkers/items_audio/colors/en/black_m4hifl.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420156/TinyTalkers/items_audio/colors/he/black_ro8zkr.mp3"
            },
            isCorrect: false
        },
        {
            id: 2,
            itemName: "blue",
            text: { en: "blue", he: "כחול" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1722267677/TinyTalkers/items_img/colors/blue_cbx375.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420127/TinyTalkers/items_audio/colors/en/blue_dgzewv.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420132/TinyTalkers/items_audio/colors/he/blue_syvtpa.mp3"
            },
            isCorrect: false
        },
        {
            id: 3,
            itemName: "brown",
            text: { en: "brown", he: "חום" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721420030/TinyTalkers/items_img/colors/brown_ansur7.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420130/TinyTalkers/items_audio/colors/en/brown_oo2oxg.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420133/TinyTalkers/items_audio/colors/he/brown_qw3esn.mp3"
            },
            isCorrect: false
        },
        {
            id: 4,
            itemName: "gray",
            text: { en: "gray", he: "אפור" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721420034/TinyTalkers/items_img/colors/gray_s6sbkn.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420138/TinyTalkers/items_audio/colors/en/gray_ajgxiv.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420135/TinyTalkers/items_audio/colors/he/gray_zmgjsg.mp3"
            },
            isCorrect: false
        },
        {
            id: 5,
            itemName: "green",
            text: { en: "green", he: "ירוק" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1722267677/TinyTalkers/items_img/colors/green_adden2.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420129/TinyTalkers/items_audio/colors/en/green_dgleu2.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420145/TinyTalkers/items_audio/colors/he/green_cafzny.mp3"
            },
            isCorrect: false
        },
        {
            id: 6,
            itemName: "orange",
            text: { en: "orange", he: "כתום" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1722267677/TinyTalkers/items_img/colors/orange_ezxzqb.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420147/TinyTalkers/items_audio/colors/en/orange_y1hhrg.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420148/TinyTalkers/items_audio/colors/he/orange_dpdcph.mp3"
            },
            isCorrect: false
        },
        {
            id: 7,
            itemName: "pink",
            text: { en: "pink", he: "ורוד" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721420028/TinyTalkers/items_img/colors/pink_txsyza.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420160/TinyTalkers/items_audio/colors/en/pink_r9bwnw.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420140/TinyTalkers/items_audio/colors/he/pink_khupt1.mp3"
            },
            isCorrect: false
        },
        {
            id: 8,
            itemName: "purple",
            text: { en: "purple", he: "סגול" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1722267677/TinyTalkers/items_img/colors/purple_s3ibdx.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420137/TinyTalkers/items_audio/colors/en/purple_zaxcvb.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420150/TinyTalkers/items_audio/colors/he/purple_dzwgfr.mp3"
            },
            isCorrect: false
        },
        {
            id: 9,
            itemName: "red",
            text: { en: "red", he: "אדום" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1722267677/TinyTalkers/items_img/colors/red_ra6jnf.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420158/TinyTalkers/items_audio/colors/en/red_gxgthq.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420143/TinyTalkers/items_audio/colors/he/red_aw2ukl.mp3"
            },
            isCorrect: false
        },
        {
            id: 10,
            itemName: "white",
            text: { en: "white", he: "לבן" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721420032/TinyTalkers/items_img/colors/white_ny22pw.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420153/TinyTalkers/items_audio/colors/en/white_pr4wt3.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420155/TinyTalkers/items_audio/colors/he/white_kbiqtf.mp3"
            },
            isCorrect: false
        },
        {
            id: 11,
            itemName: "yellow",
            text: { en: "yellow", he: "צהוב" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721420034/TinyTalkers/items_img/colors/Yellow_u7umh0.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420142/TinyTalkers/items_audio/colors/en/yellow_dvyqfp.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420151/TinyTalkers/items_audio/colors/he/yellow_kjilfz.mp3"
            },
            isCorrect: false
        },
    ],
    nature: [
        {
            id: 1,
            itemName: "cave",
            text: { en: "cave", he: "מערה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419800/TinyTalkers/items_img/nature/cave_b0h7tq.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420249/TinyTalkers/items_audio/nature/en/cave_g5xthi.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420298/TinyTalkers/items_audio/nature/he/cave_iw8u0t.mp3"
            },
            isCorrect: false
        },
        {
            id: 2,
            itemName: "clouds",
            text: { en: "clouds", he: "עננים" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419800/TinyTalkers/items_img/nature/clouds_f0blpc.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420251/TinyTalkers/items_audio/nature/en/clouds_uwnw9q.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420299/TinyTalkers/items_audio/nature/he/clouds_clfbfj.mp3"
            },
            isCorrect: false
        },
        {
            id: 3,
            itemName: "desert",
            text: { en: "desert", he: "מדבר" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419800/TinyTalkers/items_img/nature/desert_bwut8f.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420252/TinyTalkers/items_audio/nature/en/desert_sx70u9.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420301/TinyTalkers/items_audio/nature/he/desert_ktvdko.mp3"
            },
            isCorrect: false
        },
        {
            id: 4,
            itemName: "field",
            text: { en: "field", he: "שדה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419800/TinyTalkers/items_img/nature/field_jet6v8.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420254/TinyTalkers/items_audio/nature/en/field_qvod3w.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420303/TinyTalkers/items_audio/nature/he/field_jlwfhd.mp3"
            },
            isCorrect: false
        },
        {
            id: 5,
            itemName: "fire",
            text: { en: "fire", he: "אש" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419801/TinyTalkers/items_img/nature/fire_p4qypd.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420255/TinyTalkers/items_audio/nature/en/fire_dss1h6.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420311/TinyTalkers/items_audio/nature/he/fire_wd4dhj.mp3"
            },
            isCorrect: false
        },
        {
            id: 6,
            itemName: "flower",
            text: { en: "flower", he: "פרח" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419801/TinyTalkers/items_img/nature/flower_s8ghbb.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420257/TinyTalkers/items_audio/nature/en/flower_dpq7xw.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420322/TinyTalkers/items_audio/nature/he/flower_fk8bqd.mp3"
            },
            isCorrect: false
        },
        {
            id: 7,
            itemName: "forest",
            text: { en: "forest", he: "יער" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419801/TinyTalkers/items_img/nature/forest_uzxsto.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420259/TinyTalkers/items_audio/nature/en/forest_wjdrfq.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420304/TinyTalkers/items_audio/nature/he/forest_iap0zv.mp3"
            },
            isCorrect: false
        },
        {
            id: 8,
            itemName: "island",
            text: { en: "island", he: "אי" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419801/TinyTalkers/items_img/nature/island_bmjovi.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420260/TinyTalkers/items_audio/nature/en/island_baairs.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420306/TinyTalkers/items_audio/nature/he/island_uybkxu.mp3"
            },
            isCorrect: false
        },
        {
            id: 9,
            itemName: "lake",
            text: { en: "lake", he: "אגם" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419802/TinyTalkers/items_img/nature/lake_jwfyk9.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420262/TinyTalkers/items_audio/nature/en/lake_e0nsim.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420308/TinyTalkers/items_audio/nature/he/lake_tnovim.mp3"
            },
            isCorrect: false
        },
        {
            id: 10,
            itemName: "leaf",
            text: { en: "leaf", he: "עלה" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419802/TinyTalkers/items_img/nature/leaf_lg1kv8.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420264/TinyTalkers/items_audio/nature/en/leaf_kivb0l.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420309/TinyTalkers/items_audio/nature/he/leaf_iapk7o.mp3"
            },
            isCorrect: false
        },
        {
            id: 11
            , itemName: "lightning",
            text: { en: "lightning", he: "ברק" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419803/TinyTalkers/items_img/nature/lightning_bxlcwm.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420265/TinyTalkers/items_audio/nature/en/lightning_vas6k5.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420317/TinyTalkers/items_audio/nature/he/lightning_aatxrr.mp3"
            },
            isCorrect: false
        },
        {
            id: 12,
            itemName: "moon",
            text: { en: "moon", he: "ירח" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419803/TinyTalkers/items_img/nature/moon_y5ll4n.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420267/TinyTalkers/items_audio/nature/en/moon_rfqhaw.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420324/TinyTalkers/items_audio/nature/he/moon_ytoro7.mp3"
            },
            isCorrect: false
        },
        {
            id: 13,
            itemName: "mountain",
            text: { en: "mountain", he: "הר" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419803/TinyTalkers/items_img/nature/mountain_udmbit.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420268/TinyTalkers/items_audio/nature/en/mountain_azajqn.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420312/TinyTalkers/items_audio/nature/he/mountain_zpg7ns.mp3"
            },
            isCorrect: false
        },

        {
            id: 14,
            itemName: "mud",
            text: { en: "mud", he: "בוץ" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419804/TinyTalkers/items_img/nature/mud_apsmik.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420270/TinyTalkers/items_audio/nature/en/mud_ijmb6x.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420330/TinyTalkers/items_audio/nature/he/mud_zvpbgb.mp3"
            },
            isCorrect: false
        },
        {
            id: 15,
            itemName: "rain",
            text: { en: "rain", he: "גשם" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419804/TinyTalkers/items_img/nature/rain_w8vmbc.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420272/TinyTalkers/items_audio/nature/en/rain_lwz7xl.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420314/TinyTalkers/items_audio/nature/he/rain_bizy8k.mp3"
            },
            isCorrect: false
        },
        {
            id: 16,
            itemName: "rainbow",
            text: { en: "rainbow", he: "קשת בענן" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419805/TinyTalkers/items_img/nature/rainbow_xhszeu.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420273/TinyTalkers/items_audio/nature/en/rainbow_g6cvkp.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420319/TinyTalkers/items_audio/nature/he/rainbow_ctrk8q.mp3"
            },
            isCorrect: false
        },
        {
            id: 17,
            itemName: "river",
            text: { en: "river", he: "נהר" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419805/TinyTalkers/items_img/nature/river_rjkome.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420275/TinyTalkers/items_audio/nature/en/river_p4nuhg.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420325/TinyTalkers/items_audio/nature/he/river_sapctd.mp3"
            },
            isCorrect: false
        },
        {
            id: 18,
            itemName: "rocks",
            text: { en: "rocks", he: "סלעים" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419805/TinyTalkers/items_img/nature/rocks_bifxzp.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420277/TinyTalkers/items_audio/nature/en/rocks_g4hy1a.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420327/TinyTalkers/items_audio/nature/he/rocks_lu02az.mp3"
            },
            isCorrect: false
        },
        {
            id: 19,
            itemName: "sand",
            text: { en: "sand", he: "חול" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419806/TinyTalkers/items_img/nature/sand_yxnute.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420278/TinyTalkers/items_audio/nature/en/sand_egjtv7.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420329/TinyTalkers/items_audio/nature/he/sand_ezb9iu.mp3"
            },
            isCorrect: false
        },
        {
            id: 20,
            itemName: "sea",
            text: { en: "sea", he: "ים" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419806/TinyTalkers/items_img/nature/sea_wjqrrh.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420280/TinyTalkers/items_audio/nature/en/sea_x6hjun.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420316/TinyTalkers/items_audio/nature/he/sea_auwzzl.mp3"
            },
            isCorrect: false
        },
        {
            id: 21,
            itemName: "shell",
            text: { en: "shell", he: "צדף" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419807/TinyTalkers/items_img/nature/shell_y8mbvp.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420282/TinyTalkers/items_audio/nature/en/shell_mzojcl.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420332/TinyTalkers/items_audio/nature/he/shell_njerjb.mp3"
            },
            isCorrect: false
        },
        {
            id: 22,
            itemName: "snow",
            text: { en: "snow", he: "שלג" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419807/TinyTalkers/items_img/nature/snow_xs7wzt.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420283/TinyTalkers/items_audio/nature/en/snow_i4eh7t.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420334/TinyTalkers/items_audio/nature/he/snow_dxeoqx.mp3"
            },
            isCorrect: false
        },
        {
            id: 23,
            itemName: "stars",
            text: { en: "stars", he: "כוכבים" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419807/TinyTalkers/items_img/nature/stars_mkiw1q.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420285/TinyTalkers/items_audio/nature/en/stars_uhbek0.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420335/TinyTalkers/items_audio/nature/he/stars_b2dniy.mp3"
            },
            isCorrect: false
        },
        {
            id: 24,
            itemName: "stones",
            text: { en: "stones", he: "אבנים" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419808/TinyTalkers/items_img/nature/stones_hwun9v.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420286/TinyTalkers/items_audio/nature/en/stones_mj9rt9.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420338/TinyTalkers/items_audio/nature/he/stones_i6dpab.mp3"
            },
            isCorrect: false
        },
        {
            id: 25,
            itemName: "sun",
            text: { en: "sun", he: "שמש" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419809/TinyTalkers/items_img/nature/sun_yk8qmt.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420288/TinyTalkers/items_audio/nature/en/sun_xgqtpc.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420343/TinyTalkers/items_audio/nature/he/sun_pihoo3.mp3"
            },
            isCorrect: false
        },
        {
            id: 26,
            itemName: "tree",
            text: { en: "tree", he: "עץ" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419809/TinyTalkers/items_img/nature/tree_dbj42u.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420290/TinyTalkers/items_audio/nature/en/tree_igyyyc.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420321/TinyTalkers/items_audio/nature/he/tree_r7edov.mp3"
            },
            isCorrect: false
        },
        {
            id: 27,
            itemName: "volcano",
            text: { en: "volcano", he: "הר-געש" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419809/TinyTalkers/items_img/nature/volcano_q9viry.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420291/TinyTalkers/items_audio/nature/en/volcano_ciqput.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420340/TinyTalkers/items_audio/nature/he/volcano_yw48xl.mp3"
            },
            isCorrect: false
        },
        {
            id: 28,
            itemName: "water",
            text: { en: "water", he: "מים" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419809/TinyTalkers/items_img/nature/water_m2n4lv.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420293/TinyTalkers/items_audio/nature/en/water_rzpmls.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420339/TinyTalkers/items_audio/nature/he/water_veos0t.mp3"
            },
            isCorrect: false
        },
        {
            id: 29,
            itemName: "waterfall",
            text: { en: "waterfall", he: "מפל" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419810/TinyTalkers/items_img/nature/waterfall_tkcm3t.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420295/TinyTalkers/items_audio/nature/en/waterfall_ejzn7n.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420342/TinyTalkers/items_audio/nature/he/waterfall_bcn9gt.mp3"
            },
            isCorrect: false
        },
        {
            id: 30,
            itemName: "wave",
            text: { en: "wave", he: "גל" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721419811/TinyTalkers/items_img/nature/wave_jh5onm.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420296/TinyTalkers/items_audio/nature/en/wave_ywycip.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721420345/TinyTalkers/items_audio/nature/he/wave_rvyyws.mp3"
            },
            isCorrect: false
        },
    ],
    vehicles: [
        {
            id: 1,
            itemName: "airplane",
            text: { en: "airplane", he: "מטוס" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331355/TinyTalkers/items_img/vehicles/airplane_frtixd.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331443/TinyTalkers/items_audio/vehicles/en/airplane_ct3b2t.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331497/TinyTalkers/items_audio/vehicles/he/airplane_ev0oe0.mp3"
            },
            isCorrect: false
        },
        {
            id: 2,
            itemName: "ambulance",
            text: { en: "ambulance", he: "אמבולנס" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331362/TinyTalkers/items_img/vehicles/ambulance_uhspfa.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331447/TinyTalkers/items_audio/vehicles/en/ambulance_ff3hwe.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331500/TinyTalkers/items_audio/vehicles/he/ambulance_kze9ms.mp3"
            },
            isCorrect: false
        },
        {
            id: 3,
            itemName: "bicycle",
            text: { en: "bicycle", he: "אופניים" },
            imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331358/TinyTalkers/items_img/vehicles/bicycle_mmnvhn.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331450/TinyTalkers/items_audio/vehicles/en/bicycle_wqa5sz.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331504/TinyTalkers/items_audio/vehicles/he/bicycle_sqbi79.mp3"
            }, isCorrect: false
        },
        {
            id: 4,
            itemName: "boat",
            text: { en: "boat", he: "סירה" }, imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331365/TinyTalkers/items_img/vehicles/boat_bmsafo.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331454/TinyTalkers/items_audio/vehicles/en/boat_jhu2ct.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331507/TinyTalkers/items_audio/vehicles/he/boat_bqsd58.mp3"
            },
            isCorrect: false
        },
        {
            id: 5,
            itemName: "bus",
            text: { en: "bus", he: "אוטובוס" }, imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331369/TinyTalkers/items_img/vehicles/bus_sujguy.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331457/TinyTalkers/items_audio/vehicles/en/bus_acighh.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331511/TinyTalkers/items_audio/vehicles/he/bus_cq46sq.mp3"
            },
            isCorrect: false
        },
        {
            id: 6,
            itemName: "car",
            text: { en: "car", he: "מכונית" }, imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331372/TinyTalkers/items_img/vehicles/car_tltesu.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331461/TinyTalkers/items_audio/vehicles/en/car_mvp1wn.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331515/TinyTalkers/items_audio/vehicles/he/car_zmbfqb.mp3"
            },
            isCorrect: false
        },
        {
            id: 7,
            itemName: "firetruck",
            text: { en: "firetruck", he: "כבאית" }, imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331379/TinyTalkers/items_img/vehicles/firetruck_xr9oue.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331465/TinyTalkers/items_audio/vehicles/en/firetruck_r6a1rx.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331518/TinyTalkers/items_audio/vehicles/he/firetruck_eag2j6.mp3"
            },
            isCorrect: false
        },
        {
            id: 8,
            itemName: "helicopter",
            text: { en: "helicopter", he: "מסוק" }, imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331376/TinyTalkers/items_img/vehicles/helicopter_jxebev.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331468/TinyTalkers/items_audio/vehicles/en/helicopter_irnpsz.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331522/TinyTalkers/items_audio/vehicles/he/helicopter_lvnh7t.mp3"
            },
            isCorrect: false
        },
        {
            id: 9,
            itemName: "motorcycle",
            text: { en: "motorcycle", he: "אופנוע" }, imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331383/TinyTalkers/items_img/vehicles/motorcycle_ywrrkv.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331472/TinyTalkers/items_audio/vehicles/en/motorcycle_arydpm.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331525/TinyTalkers/items_audio/vehicles/he/motorcycle_lc9z0a.mp3"
            },
            isCorrect: false
        },
        {
            id: 10,
            itemName: "ship",
            text: { en: "ship", he: "ספינה" }, imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331386/TinyTalkers/items_img/vehicles/ship_mnljzu.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331475/TinyTalkers/items_audio/vehicles/en/ship_tbshk4.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331529/TinyTalkers/items_audio/vehicles/he/ship_gi8yjc.mp3"
            },
            isCorrect: false
        },
        {
            id: 11,
            itemName: "spaceship",
            text: { en: "spaceship", he: "חללית" }, imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331389/TinyTalkers/items_img/vehicles/spaceship_g7twfw.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331479/TinyTalkers/items_audio/vehicles/en/spaceship_wga6ix.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331532/TinyTalkers/items_audio/vehicles/he/spaceship_egcnzc.mp3"
            },
            isCorrect: false
        },
        {
            id: 12,
            itemName: "submarine",
            text: { en: "submarine", he: "צוללת" }, imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331393/TinyTalkers/items_img/vehicles/submarine_lpkfi4.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331482/TinyTalkers/items_audio/vehicles/en/submarine_xm7f3q.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331536/TinyTalkers/items_audio/vehicles/he/submarine_nmmqpv.mp3"
            },
            isCorrect: false
        },
        {
            id: 13,
            itemName: "tractor",
            text: { en: "tractor", he: "טרקטור" }, imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331396/TinyTalkers/items_img/vehicles/tractor_ufe1j6.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331486/TinyTalkers/items_audio/vehicles/en/tractor_ypqnj9.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331540/TinyTalkers/items_audio/vehicles/he/tractor_reorbv.mp3"
            },
            isCorrect: false
        },
        {
            id: 14,
            itemName: "train",
            text: { en: "train", he: "רכבת" }, imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331399/TinyTalkers/items_img/vehicles/train_enl3rd.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331490/TinyTalkers/items_audio/vehicles/en/train_vbmk8i.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331543/TinyTalkers/items_audio/vehicles/he/train_jnqrsk.mp3"
            },
            isCorrect: false
        },
        {
            id: 15,
            itemName: "truck",
            text: { en: "truck", he: "משאית" }, imgUrl: "https://res.cloudinary.com/dmjixwbtg/image/upload/v1721331403/TinyTalkers/items_img/vehicles/truck_h6ez1k.jpg",
            audioUrl:
            {
                en: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331493/TinyTalkers/items_audio/vehicles/en/truck_zbxusu.mp3",
                he: "https://res.cloudinary.com/dmjixwbtg/video/upload/v1721331547/TinyTalkers/items_audio/vehicles/he/truck_xghuym.mp3"
            },
            isCorrect: false
        },
    ],
}

function getItems(questType) {
    return gQuestData[questType]
}

