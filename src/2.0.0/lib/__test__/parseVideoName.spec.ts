import { parseVideoName, parseVideoNameFixed } from "../parseVideoName";

const source = {
  currentVideoId: 6291551,
  isLike: false,
  pctr: 0.02,
  commentCountRealValue: 1155,
  groupId: "",
  bananaCountShow: "4.7万",
  channel: {
    name: "综合舞蹈",
    id: 135,
    parentId: 123,
    parentName: "舞蹈·偶像",
  },
  stowCountShow: "1.6万",
  giftPeachCountShow: "0",
  stowCount: 15989,
  description: "第二次尝试韩舞，这次是真•性感风！\\r<br/>这种画风你们喜欢吗！",
  likeCount: 2663,
  title: "【Kyokyo】★提线木偶★Stellar  ",
  hasHotComment: true,
  shareCountShow: "721",
  belongToSpecifyArubamu: false,
  isDislike: false,
  result: 0,
  shareCount: 721,
  picShareUrl: "https://m.acfun.cn/v/?ac=4621380&shareType=pic",
  videoList: [
    {
      priority: 0,
      fileName: "预览.mp4",
      durationMillis: 140000,
      title: "Part1",
      sourceStatus: 3,
      danmakuCountShow: "2289",
      sizeType: 1,
      danmakuGuidePosition: 10000,
      uploadTime: 1550859342428,
      danmakuCount: 2289,
      visibleType: 1,
      id: "6291551",
    },
  ],
  danmakuCount: 2289,
  isThrowBanana: false,
  viewCount: 1929464,
  bananaCount: 47256,
  currentVideoInfo: {
    priority: 0,
    ksPlayJson:
      '{"version":"1.0.0","businessType":1,"mediaType":1,"videoId":"84c4538cde54a4a7","hideAuto":false,"manualDefaultSelect":false,"stereoType":0,"adaptationSet":[{"id":0,"duration":140800,"representation":[{"id":1,"url":"https://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/3HlXWWGOvsJ3D9Vhsn2QzbWPzp9OwtD40Yk9bk8v9t7Khv6leh44hGnw-Qqx9_KP.m3u8?pkey=ABCXboS9WgQQQebSdp5VdDQq_DZCuI1yD8j14WGS8GAkUc6Ewdfx3r57-BUUMz9BFD8FDh6OirnCMq4wYPn6KG-a8-AEVJcRspOqE4YC3lu04jfvYSYrhxwXXpcW6b-EPCk6MPobSDCuYop7ZeWpg7_XWtdiuX2KfbHfWBFKpe0s2gYPEiHKcxrC5feB3eEvrz7dQyt4sN7CA9xXdPusge-s7xS8guOaMsKBv2kp-o4bcQ&safety_id=AALkyOWhaZGF-BXnt7OyTIBR","backupUrl":["https://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/3HlXWWGOvsJ3D9Vhsn2QzbWPzp9OwtD40Yk9bk8v9t7Khv6leh44hGnw-Qqx9_KP.m3u8?pkey=ABCXboS9WgQQQebSdp5VdDQq_DZCuI1yD8j14WGS8GAkUWMv-MGE7nPp2NhloMdDXv6QME3ukpp_V08FpLXPzfDnAhAIB0Aj9TtLE3vTrzf3AkR9s3bFdlDJUFZPcYU6r-MaNFhOLAy5_GX6JOVLY8Nem8B4g-FEu_9A4x0Hwa-iYYAf3dn6aO68nNJOjmeQTSk-wE_D1Iuf8rQsFXeGZPDrgQMS9Kd2KP3zSpbqrlRPsw&safety_id=AALkyOWhaZGF-BXnt7OyTIBR"],"m3u8Slice":"#EXTM3U\\\\n#EXT-X-VERSION:4\\\\n#EXT-X-TARGETDURATION:6\\\\n#EXT-X-MEDIA-SEQUENCE:0\\\\n#EXTINF:5.114689,\\\\nhttps://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/3HlXWWGOvsJ3D9Vhsn2QzbWPzp9OwtD40Yk9bk8v9t7Khv6leh44hGnw-Qqx9_KP.00000.ts?pkey=ABCXboS9WgQQQebSdp5VdDQq_DZCuI1yD8j14WGS8GAkUQna4LW7PQjbC8RaccpmUtG4PsLy3E2n8i5PmT-nwMKTnOBJ0_NLbrNJFRllnibpMc6tOGXZ6G5PxbRH3cTXqQcTNEQmeyDANqchJaS4B2gU-Ikjy8kXOV4-iQsBB2bdjoDJrlszrTcCDzomJxvkbfvDC-m0xhkDQPtkQI6OIWtIF9WGDLZmcwPQkOkYaKJwDA&safety_id=AALkyOWhaZGF-BXnt7OyTIBR\\\\n","maxBitrate":3581,"avgBitrate":2024,"codecs":"avc1.640028,mp4a.40.2","width":1920,"height":1080,"frameRate":25.0,"quality":1.0,"qualityType":"1080p","qualityLabel":"1080P","comment":"84c4538cde54a4a7/HLS_1080P_2","hdrType":0},{"id":2,"url":"https://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/Xh8ltFwwe_68wPCUU0hHIufGCyaWn0DjF8D_x_81hoY1yy9MX3kMZb74oZ0COaYU.m3u8?pkey=ABCBuslyk2F6Jj1Ujli5tcwrO2L7AONMUy0uKXdcpXPknOmrge_Fz82dg7K-dVe_2XV6Ni20Vz26aRLG7WOlilAI8p9f0IQwkEsikFcyl_anydaKICuAtp5IXxba-WpWwkxT9UYFdHbERaGF9nBcJZOYtu94_PM2VFyQyv5jiVC4LdWo-dIp2FKaoxCCMCPmS2kKnaiAcS-yx4Uf1EBBAZZZmkagd7kSFqVArZ-6B_x6NA&safety_id=AALkyOWhaZGF-BXnt7OyTIBR","backupUrl":["https://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/Xh8ltFwwe_68wPCUU0hHIufGCyaWn0DjF8D_x_81hoY1yy9MX3kMZb74oZ0COaYU.m3u8?pkey=ABCBuslyk2F6Jj1Ujli5tcwrO2L7AONMUy0uKXdcpXPknNE3tGVi7HAHOhkXKKZIBcMllwiId4E73rjWTjOtUcTg8uz4nbHGd9sj-4gkn3WfC7W0wZ35eBUrE8NXETuFKHQ9VesU3xVlC6SEIFDWiSduvR97Aq6Ab7ETkQ6okx2C6xvp31gVRSjVDk3IBHpU_iZCwlq8P4LTbKtAUZX7hq3dR9EgdPe8rl1inH_vVW4uqQ&safety_id=AALkyOWhaZGF-BXnt7OyTIBR"],"m3u8Slice":"#EXTM3U\\\\n#EXT-X-VERSION:4\\\\n#EXT-X-TARGETDURATION:6\\\\n#EXT-X-MEDIA-SEQUENCE:0\\\\n#EXTINF:5.114689,\\\\nhttps://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/Xh8ltFwwe_68wPCUU0hHIufGCyaWn0DjF8D_x_81hoY1yy9MX3kMZb74oZ0COaYU.00000.ts?pkey=ABCBuslyk2F6Jj1Ujli5tcwrO2L7AONMUy0uKXdcpXPknIIbxOLXvVclTDu0_H1QwzMVRGdYZA6lA8hKytckkLK7iDkerHHU1PQ44kbJSgHNfa261irSKD4I-TsdzsBMSjwecSOjcZQlw3HZCO9dweCh_h1YAaggD4FXS72Gb6TCJqzUrSu4Cp8YZY65Om6SKkRJRlB9Y_9egDFCYjLARE-T2JOPEeq54w-Z1Ru9dFLVeA&safety_id=AALkyOWhaZGF-BXnt7OyTIBR\\\\n","maxBitrate":2340,"avgBitrate":819,"codecs":"avc1.64001f,mp4a.40.2","width":1280,"height":720,"frameRate":25.0,"quality":1.0,"qualityType":"720p","qualityLabel":"720P","comment":"84c4538cde54a4a7/HLS_720P_2","hdrType":0},{"id":3,"url":"https://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/Xh8ltFwwe_68wPCUU0hHIsCW6LWsf2_jWvKUS6k9Ey_1Q3s9_aYy-BC7SMp_dOyy.m3u8?pkey=ABC38piVtL-K535BTDr2U3JDl83zVVtf1cgQT2b81wwZOCOY0_OMnyPNx_EfdJfNxx8qu4hFtyQVJPKerS9_m0E73CvYwhIqalluhmszfwbB1JzdkKDs3jNhbVhIVyaS0uU7FvPO-0NyFRIfuQAI7z7czZJvvSBEprS0OcymeZu3dIPfLfayaYyMSpK9hoQdPSfUkZG99FT6QY_oAXNSd9gth0qU59AD126yvmDjPChAUg&safety_id=AALkyOWhaZGF-BXnt7OyTIBR","backupUrl":["https://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/Xh8ltFwwe_68wPCUU0hHIsCW6LWsf2_jWvKUS6k9Ey_1Q3s9_aYy-BC7SMp_dOyy.m3u8?pkey=ABC38piVtL-K535BTDr2U3JDl83zVVtf1cgQT2b81wwZOG5vVzBfuRYFu_5wErlgOWzclR6RXeUP5QO0Onva_0ObQBhr4jRiSApwEi6-1k1ljRGri81AUrWuU5wFzuQx9grnRUedtWHFRpTknTTLxqDDHCTbl-bX5QIYp_715RaXfYp0o5Cl3r2sbkrbLLbbopOCOob3_LmOIW56PXqsewv7FHa0QEpbDHkdWIQwZzGcBg&safety_id=AALkyOWhaZGF-BXnt7OyTIBR"],"m3u8Slice":"#EXTM3U\\\\n#EXT-X-VERSION:4\\\\n#EXT-X-TARGETDURATION:6\\\\n#EXT-X-MEDIA-SEQUENCE:0\\\\n#EXTINF:5.114689,\\\\nhttps://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/Xh8ltFwwe_68wPCUU0hHIsCW6LWsf2_jWvKUS6k9Ey_1Q3s9_aYy-BC7SMp_dOyy.00000.ts?pkey=ABC38piVtL-K535BTDr2U3JDl83zVVtf1cgQT2b81wwZODcLJSYqOzVk4BSID6CTL9GDv1cTFcYeVl4Tq34ClquHQpFXoIQrp_mfgPwwqzae4MN5oDJyQEq8I5UDPsEIeTEMU07EtseMaLubwMzR2PEfRmrfutIkqfoFmr5JuHKGdY3pZQHUtwX6uJLliTD53bOAu23O8YOQzbkHzIE-nz4Kaxjl5kLD9fETJopIRlsNuA&safety_id=AALkyOWhaZGF-BXnt7OyTIBR\\\\n","maxBitrate":1060,"avgBitrate":486,"codecs":"avc1.64001f,mp4a.40.2","width":960,"height":540,"frameRate":25.0,"quality":1.0,"qualityType":"540p","qualityLabel":"540P","comment":"84c4538cde54a4a7/HLS_540P_2","hdrType":0},{"id":4,"url":"https://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/Xh8ltFwwe_68wPCUU0hHIpTO0bEaKtIs0DCbUbbtsBZtbU6rHf33C0eR1G6cmu9F.m3u8?pkey=ABBxLIPcO4VAJO7286RftSIdWKvpI1kn-OE-pM9P6tHVM30HJ7t5IAhBhwy-pwg3mUXaL50py1mdIa0Q0cAFtNbeE-1C1kSFmvJYVYb4D9BoSxVqenWEqhi4bf6pHlwYwfDqYJAlnCr4dV0YGJ1XpqRK27L5Lbs785VM3QeH2-qgoO98RFluHmRWYVWgYccBXTFJLc2BSM6blVu1hwHW3kBCpxpYuIeeF7y7U3fOpg8-Gw&safety_id=AALkyOWhaZGF-BXnt7OyTIBR","backupUrl":["https://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/Xh8ltFwwe_68wPCUU0hHIpTO0bEaKtIs0DCbUbbtsBZtbU6rHf33C0eR1G6cmu9F.m3u8?pkey=ABBxLIPcO4VAJO7286RftSIdWKvpI1kn-OE-pM9P6tHVMyYq-ZQP5Di7nrd_omO_XK9VzjX-HBAG3KeuEt9VupzBxqaH31xb44BWHT_-gMXwehYOcQWrPuLFvgYIPnI2-yh9bdqXRGoQPIriT_ro7MMTjCI6eHefTYS7wqMWjMJYov2xM8Spf-yIRNDJ0R3Ck_MnyaDcxGUbj5TvL6OEg2bX9M5eO15vn7YerYJx6sSrXQ&safety_id=AALkyOWhaZGF-BXnt7OyTIBR"],"m3u8Slice":"#EXTM3U\\\\n#EXT-X-VERSION:4\\\\n#EXT-X-TARGETDURATION:6\\\\n#EXT-X-MEDIA-SEQUENCE:0\\\\n#EXTINF:5.114689,\\\\nhttps://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/Xh8ltFwwe_68wPCUU0hHIpTO0bEaKtIs0DCbUbbtsBZtbU6rHf33C0eR1G6cmu9F.00000.ts?pkey=ABBxLIPcO4VAJO7286RftSIdWKvpI1kn-OE-pM9P6tHVMyntxnC0I5TIqb20bHAOhQp0IXj5H0kcOLXw73Oc03pF5S_ZeopB0JA5DjZl0Cx_5qcN3lhHtBquaEyAKCuc4SpKChrVDz4TPt1vb1oeZqp_uIiyyyRHC3KoEpqVRimQjTv232NBx_fL5oVPncXdudlBGyUKl-wYn54cuNOlW0jc-vQVWPYWAhepq0VOzR1LOw&safety_id=AALkyOWhaZGF-BXnt7OyTIBR\\\\n","maxBitrate":620,"avgBitrate":300,"codecs":"avc1.64001e,mp4a.40.2","width":640,"height":360,"frameRate":25.0,"quality":1.0,"qualityType":"360p","qualityLabel":"360P","comment":"84c4538cde54a4a7/HLS_360P_2","hdrType":0}]}]}',
    ksPlayJsonHevc:
      '{"version":"1.0.0","businessType":1,"mediaType":1,"videoId":"84c4538cde54a4a7","hideAuto":false,"manualDefaultSelect":false,"stereoType":0,"adaptationSet":[{"id":0,"duration":140800,"representation":[{"id":1,"url":"https://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/k07DuRG-j2YU0ig8-SvCagZZiVLJsh5jInJIir7AWMjM013uP0UT6QUzqihe9bgm.m3u8?pkey=ABCADPNqRUAjY89wvBxx83MsCNKHD0bDIuxbQdSIjtAW0pQiIum_gLQpwn-u5P6-1CGFFcSU1Ne6QGSUr-PZOZHV87aZLGHdA5FToHbY7tWLh1PnkSgyDkbvoSMfm-PWyApZi9jm6MmGcolbC1GOHhq-wUEqxHJgHWH41cqP0Hl9smJaAJqmvK-m0pJObvMYTyp1j9nDbJI9QVLpkM1s_MlJbrh_TX_qTqTzo_rsw7zuuw&safety_id=AALkyOWhaZGF-BXnt7OyTIBR","backupUrl":["https://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/k07DuRG-j2YU0ig8-SvCagZZiVLJsh5jInJIir7AWMjM013uP0UT6QUzqihe9bgm.m3u8?pkey=ABCADPNqRUAjY89wvBxx83MsCNKHD0bDIuxbQdSIjtAW0rdDxHIUr6liCu9j6tVzABk4sMxFRWkiwhegfutlT1gmrFW9jt6KMwgICnA2FL2Y5r8o2mijWfJFwYjw2EENfxTUrGXiHPqcNsrru2xl7Q7yNcRXjcr0roUx9iTxwgfeqGmSd91JoKQ8d8-RRsbNE81Q7h_R9s111pPNDjTRwK3QWN3txuJllfKX-21M7U564g&safety_id=AALkyOWhaZGF-BXnt7OyTIBR"],"m3u8Slice":"#EXTM3U\\\\n#EXT-X-VERSION:4\\\\n#EXT-X-TARGETDURATION:5\\\\n#EXT-X-MEDIA-SEQUENCE:0\\\\n#EXTINF:5.0,\\\\nhttps://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/k07DuRG-j2YU0ig8-SvCagZZiVLJsh5jInJIir7AWMjM013uP0UT6QUzqihe9bgm.00000.ts?pkey=ABCADPNqRUAjY89wvBxx83MsCNKHD0bDIuxbQdSIjtAW0mDM-Hzzaxt2yQhKKUl9CITf9fpcWePsSP6i-l2MmpCEShDCR95T6AqpB_QfCAt8Fwf1e2kpdwt5zzfifaxRo9nPHPkjSxXsf_agH7f3n4UlYc9PWXjHD7VX-XExUo4qf-6dZ5RQMUZx-Ca0_vFQ0eJfC4pomc_uJ39ilnkNyz-Zsj8A1iLLojAmXI7XOzgKLQ&safety_id=AALkyOWhaZGF-BXnt7OyTIBR\\\\n","maxBitrate":3955,"avgBitrate":1011,"codecs":"","width":1920,"height":1080,"frameRate":25.0,"quality":1.0,"qualityType":"1080p","qualityLabel":"1080P","comment":"84c4538cde54a4a7/HLS_1080P_HEVC_SWIFT_1","hdrType":0},{"id":2,"url":"https://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/rlWavHwGwCf49garueZXo_nVD4LSwGb_um72kS4tLSM_voH3BHAzcEZ0sQlgtEOu.m3u8?pkey=ABAycM8t57lUU7SAvJ9y07HE41U3m9QavTUCjd-SvWhWrIf2YZUyDH7sfZD3lqvJt6pDnKLUTEPDViuuaIeG4tZiGShmu8pytf-nC-328ZNyP2BhqBwa_HkhVQ9a7u_38X91h7oy30wWxvcwbHR-icUeZ9Nh30mb2y_aKlrgZb5FXW8Bma1W2JYrvNHhazgNPIADXGey8Ffi2Ed7fk5OEM168kUecnJ8qzJTyZf51IOVcg&safety_id=AALkyOWhaZGF-BXnt7OyTIBR","backupUrl":["https://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/rlWavHwGwCf49garueZXo_nVD4LSwGb_um72kS4tLSM_voH3BHAzcEZ0sQlgtEOu.m3u8?pkey=ABAycM8t57lUU7SAvJ9y07HE41U3m9QavTUCjd-SvWhWrFBm9WqKA9PwSSAAanI6tyiGDyH2F4GsXSbQCpBXW0Zejvv9FyqXUeTuNI5iN7F2qfIYQzYT_WGOy4V1sWjF5PWa-o9DA_fK-Sdqx6Iyw-kAs7fqkiKk5R7JAqyBSKTeCWg8y8MF6RWRyIl_pkFPZwFXRjPmspV5kD4UsHuLEgfBPZ_inbxKCY4UU59ch-eN8w&safety_id=AALkyOWhaZGF-BXnt7OyTIBR"],"m3u8Slice":"#EXTM3U\\\\n#EXT-X-VERSION:4\\\\n#EXT-X-TARGETDURATION:5\\\\n#EXT-X-MEDIA-SEQUENCE:0\\\\n#EXTINF:5.0,\\\\nhttps://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/rlWavHwGwCf49garueZXo_nVD4LSwGb_um72kS4tLSM_voH3BHAzcEZ0sQlgtEOu.00000.ts?pkey=ABAycM8t57lUU7SAvJ9y07HE41U3m9QavTUCjd-SvWhWrFl9fC7DfJpDCkd3y5FIfw-TgD7u_lAzz9sh1iV-TKbtkb8RbhsSlZWIxFqUv620ZcbaZJkHq3GluB5ILK6JSZdyBXxq78j3aczIgOB1E1oqK3bZdRucc3cpoJKIunCx1O1DwoQHq3-m7Lq9qml_uT6970JqNpxQvkfl8z1rJNFcEOrZQMPCkgfLPyDz1Yc6wA&safety_id=AALkyOWhaZGF-BXnt7OyTIBR\\\\n","maxBitrate":2305,"avgBitrate":570,"codecs":"","width":1280,"height":720,"frameRate":25.0,"quality":1.0,"qualityType":"720p","qualityLabel":"720P","comment":"84c4538cde54a4a7/HLS_720P_HEVC_SWIFT_1","hdrType":0},{"id":3,"url":"https://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/rlWavHwGwCf49garueZXoxdVcNYouUTAb7xlv42VgdiOqdc0qtbI5L3V-u9CW04V.m3u8?pkey=ABDWqAzAbIJAJzX5uFHGcpdEiBfztTqUZDGeTIsgLXonXhjzgY0samJVFOl7cJYBfuSHGA5-iCqHrhqMy99pv7Xi3KHtJnhAVl29ybyN5VnqdTcbBcVDkbdhrHDv7XxPvIkTrU6_g6MpwdNRBdbdmHTYAqP3vgCD3_yfOySK0QiOOasYlQ-OMhbB95G1aHwom-n-wNj_jCkz890CuLyskBQ6niL5AldyAhTWiwIzGOmf_Q&safety_id=AALkyOWhaZGF-BXnt7OyTIBR","backupUrl":["https://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/rlWavHwGwCf49garueZXoxdVcNYouUTAb7xlv42VgdiOqdc0qtbI5L3V-u9CW04V.m3u8?pkey=ABDWqAzAbIJAJzX5uFHGcpdEiBfztTqUZDGeTIsgLXonXlsuhGi9CUYdzUOwQsaM21wz2EjdVLeRDW_S9eqJu69BDcNmgpGW1CfV-phsDe7_FS3mHY2ygD6PACoUmB9gL0bfilrX4BC_VlAr2q2w9R6Sh0z_-WJPyZjAW9thNSuPvaar1TxDLl1liDgZ7DfVxssEodpzVBxrA_RjqBjvz_SD7OEXWMT__YH_Wi_rFjyF_g&safety_id=AALkyOWhaZGF-BXnt7OyTIBR"],"m3u8Slice":"#EXTM3U\\\\n#EXT-X-VERSION:4\\\\n#EXT-X-TARGETDURATION:5\\\\n#EXT-X-MEDIA-SEQUENCE:0\\\\n#EXTINF:5.0,\\\\nhttps://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/rlWavHwGwCf49garueZXoxdVcNYouUTAb7xlv42VgdiOqdc0qtbI5L3V-u9CW04V.00000.ts?pkey=ABDWqAzAbIJAJzX5uFHGcpdEiBfztTqUZDGeTIsgLXonXt4MIcVZWPMZGV69b_HUsj7dgoBusGygY8O5QDHcYVq0oH9sZykub-sW0laE0lE_GwhgwN8yIBO_h8PFYg_irhXRwRB6GWsBRC8lPojz0r0mxzYsTWk98yOAvP6vhLbD8_heGyyH14Z6u3Q4ovtY76tiwgvR0DqkBd3r0Ln3Rnrs_fVTiC0vIVi8jaPmRw-MXQ&safety_id=AALkyOWhaZGF-BXnt7OyTIBR\\\\n","maxBitrate":950,"avgBitrate":358,"codecs":"","width":852,"height":480,"frameRate":25.0,"quality":1.0,"qualityType":"540p","qualityLabel":"540P","comment":"84c4538cde54a4a7/HLS_540P_HEVC_SWIFT_1","hdrType":0},{"id":4,"url":"https://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/rlWavHwGwCf49garueZXoxjW8ePmU1H_WWeT8TmcxPHDT2GBKfVhmBCd80Yji-KW.m3u8?pkey=ABDsC7aZZXHGpGJPLgbRm4GX_XSXizhdK93QvFUspxol60xoamSOeIFX-awsKOOdzDyKBDJmpm8B2PLZDwPtDsHlS66s6z7HoNx7XMFYGFQWUZ3VAXAsa-OGtXad5qaYsvulSesKXvPhipJlYA6H1jAIFxWhfDXLPcfx6vKAfMoKoNF34D6tBJdctoOTshgliMhOa9Gzu0wCTIKTo_sIhZFcBs_gpNApgC5nY2eVgZ_qJQ&safety_id=AALkyOWhaZGF-BXnt7OyTIBR","backupUrl":["https://tx-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/rlWavHwGwCf49garueZXoxjW8ePmU1H_WWeT8TmcxPHDT2GBKfVhmBCd80Yji-KW.m3u8?pkey=ABDsC7aZZXHGpGJPLgbRm4GX_XSXizhdK93QvFUspxol66ue-uZGjj94OyX5CTrTFI0Uhs2ZyU1UPqqyEWRmodo89VYtNpV11FGsu1kg3eeFxW75R9k3SeQs8xkFMvpZidpz76F3rUdvAy17PKZT2bDI_p4zZ0XdXTlZqlAGrlxSbUpJJbHpLt0qtEAXwbvf4uBBPlEL0KJ5KHAfmbdUHlUzZ-8yYNSlPtAEQNkQNCiGFw&safety_id=AALkyOWhaZGF-BXnt7OyTIBR"],"m3u8Slice":"#EXTM3U\\\\n#EXT-X-VERSION:4\\\\n#EXT-X-TARGETDURATION:5\\\\n#EXT-X-MEDIA-SEQUENCE:0\\\\n#EXTINF:5.0,\\\\nhttps://ali-safety-video.acfun.cn/mediacloud/acfun/acfun_video/hls/rlWavHwGwCf49garueZXoxjW8ePmU1H_WWeT8TmcxPHDT2GBKfVhmBCd80Yji-KW.00000.ts?pkey=ABDsC7aZZXHGpGJPLgbRm4GX_XSXizhdK93QvFUspxol67C9N77YQ1XW2nBtqdue9CftSiahuPHag580PIoG0aFjbPsRiI5jKDnu4iTqGClnReYu9mIIQneu3jv-asntEoGEYuih0u4o9efAxG8EMMLtDDGGvPf05oC8zApR3K54VP7l2QHND9dZ_KI0GEyaYKUQKMYolJFqIf9IxMT9gM963twxSGMtnVpRJXul7XlmJg&safety_id=AALkyOWhaZGF-BXnt7OyTIBR\\\\n","maxBitrate":475,"avgBitrate":248,"codecs":"","width":640,"height":360,"frameRate":25.0,"quality":1.0,"qualityType":"360p","qualityLabel":"360P","comment":"84c4538cde54a4a7/HLS_360P_HEVC_SWIFT_1","hdrType":0}]}]}',
    playDomainInfo: [
      // [Object],
      // [Object],
      // [Object],
      // [Object],
      // [Object],
      // [Object],
      // [Object],
    ],
    fileName: "预览.mp4",
    durationMillis: 140000,
    title: "Part1",
    sourceStatus: 3,
    danmakuCountShow: "2289",
    sizeType: 1,
    danmakuGuidePosition: 10000,
    uploadTime: 1550859342428,
    danmakuCount: 2289,
    visibleType: 1,
    isKsManifest: true,
    transcodeInfos: [
      // [Object], [Object], [Object], [Object]
    ],
    id: "6291551",
  },
  coverCdnUrls: [
    {
      url: "https://tx-free-imgs.acfun.cn/content/2018_9_04/1538636242.jpg?imageslim",
      freeTrafficCdn: true,
    },
    {
      url: "https://imgs.aixifan.com/content/2018_9_04/1538636242.jpg?imageslim",
      freeTrafficCdn: false,
    },
  ],
  likeCountShow: "2663",
  giftPeachCount: 0,
  viewCountShow: "192.9万",
  dougaId: "4621380",
  isRewardSupportted: true,
  commentCountShow: "1155",
  durationMillis: 140000,
  commentCountTenThousandShow: "1155",
  coverImgInfo: {
    width: 480,
    height: 270,
    size: 55038,
    type: 1,
    animated: false,
    thumbnailImage: {
      cdnUrls: [
        // Array
      ],
      animated: 1,
    },
    expandedImage: {
      cdnUrls: [
        // Array
      ],
    },
    thumbnailImageCdnUrl:
      "https://tx-free-imgs2.acfun.cn/kimg/bs2/zt-image-host/ChYwODkwOGJjYTA1MTBjZGRiYTlkYTAyEJjM1y8.png",
  },
  "host-name": "hb2-acfun-kce-node53.aliyun",
  commentCount: 1155,
  coverUrl:
    "https://tx-free-imgs.acfun.cn/content/2018_9_04/1538636242.jpg?imageslim",
  disableEdit: true,
  danmakuCountShow: "2289",
  createTimeMillis: 1538640102000,
  createTime: "2018-10-4",
  superUbb: true,
  shareUrl: "https://m.acfun.cn/v/?ac=4621380",
  user: {
    action: 3,
    href: "13215999",
    name: "Kyokyo沉迷汉堡王",
    signature: "微博：kyokyo不是qq啊",
    gender: 0,
    followingCount: "43",
    headCdnUrls: [
      // [Object], [Object]
    ],
    isJoinUpCollege: true,
    followingCountValue: 43,
    contributeCountValue: 138,
    fanCount: "28.0万",
    avatarImage:
      "https://tx-free-imgs.acfun.cn/6V7BKjNrT3-rQzyUb-rUvequ-qmI7na-JrAjia.gif?imageslim",
    userHeadImgInfo: {
      width: 180,
      height: 180,
      size: 67061,
      type: 0,
      animated: false,
      thumbnailImage: [
        // Object
      ],
      expandedImage: [
        // Object
      ],
      thumbnailImageCdnUrl:
        "https://tx-free-imgs2.acfun.cn/kimg/bs2/zt-image-host/ChQwODkzODkwODEwOGNhYzk4Y2QwNxCYzNcv.png",
    },
    isFollowed: false,
    socialMedal: {},
    contributeCount: "138",
    nameColor: 1,
    avatarFramePcImg:
      "https://imgs.aixifan.com/6V7BKjNrT3-rQzyUb-rUvequ-qmI7na-JrAjia.gif",
    avatarFrameMobileImg:
      "https://imgs.aixifan.com/ZotpKRH1uS-vI3Eve-UjInUv-n2mAju-fQ7Fny.gif",
    verifiedTypes: [2, 5],
    isFollowing: false,
    avatarFrame: 396,
    sexTrend: -1,
    followingStatus: 1,
    headUrl:
      "https://tx-free-imgs2.acfun.cn/kimg/bs2/zt-image-host/ChQwODkzODkwODEwOGNhYzk4Y2QwNxCYzNcv.png",
    fanCountValue: 280629,
    verifiedType: 2,
    verifiedText: "2019年度“AcFun硬核奥斯卡”十大硬核UP主\\n",
    id: "13215999",
    nameStyle: "color: #FD4C5C",
  },
  status: 2,
  isFavorite: false,
  mkey: "AAHewK3eIAAzMTk4Mzg1MzgCARAAMEP1uwEvRnI1QAAAAAs6rx%2By%2FKGR3TYsDIDmSWEQYLj%2FVWecsHrIaDJrmKTgF9xeuc7Woh1Vu1TL5nNjtyKk0yO%2BKCwAtj5GnEV69eE%3D",
  priority: 0,
};

describe("parseVideoName", () => {
  it("should", () => {
    expect(parseVideoName(source)).toEqual(
      "ac4621380_【Kyokyo】★提线木偶★Stellar  _Kyokyo沉迷汉堡王_2018-10-4_第二次尝试韩舞，这次是真•性感风！\\r<br/>这种画风你们喜欢吗！"
    );
    expect(parseVideoNameFixed(source)).toEqual(
      "ac4621380_【Kyokyo】★提线木偶★Stellar-_Kyokyo沉迷汉堡王_2018-10-4_第二次尝试韩舞，这次是真•性感风！-r-br-这种画风你们喜欢吗！"
    );
  });
});
