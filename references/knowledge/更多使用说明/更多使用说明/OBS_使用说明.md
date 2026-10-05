---
title: "OBS 使用说明"
url: "https://flowin.cn/publish/c3ab35aafc9442a08cd78f700c6a02f3/dc526de1c20040d588966ad03dde0400"
depth: 3
section: "更多使用说明"
---

# OBS 使用说明


# 一、obs推流直播


使用OBS进行推流直播是指用户先获取ClassIn的课堂推流地址，并将其添加到OBS中。当ClassIn对应的课堂开始后，用户可以使用OBS抓取电脑桌面或软件的画面并开始推流。这样，通过ClassIn网页观看直播的学生就能看到OBS中抓取的画面内容。在使用OBS推流时，用户无需进入ClassIn教室。


## （1）下载obs


在浏览器中访问 obsproject.com ，然后根据您的电脑系统下载对应的安装包


![](https://cofile.eeo.cn/res-store%2Fb49cb27402d6ed0c7ff69c3a16c5aa5c356dc8cb9386b7b6403d0e1c624bfb3a_656583?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=65d9130cc49cf8fa9d392ddc21cc224f0e2f0225)


## （2）obs中添加视频


### 2.1 创建场景


在左下角场景栏目中创建一个新的场景


![](https://cofile.eeo.cn/res-store%2F0959088b9f842208d7dead22581dd62e8d2a9896ce10fd7c359f187eac456ee9_113954?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=065c9dcbd29b375fd183d661ea53a6d9ac4fee9f)


### 2.2 场景中添加视频


在下方来源位置添加一个媒体源


![](https://cofile.eeo.cn/res-store%2F06be219db4a72da8a9dbbaf566621a0da2da388fd01c797664f5375dfa3fa70a_184235?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=811478b1a3aedf50252c5ddc202d12e02bd7da50)


设置来源名称后点击确定


![](https://cofile.eeo.cn/res-store%2Fa3f52d82392c0a6d4707cddaad45fe8d8aa03a584277f5af73aeddf617972635_200688?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=b057659eb82d0f8dbe4e789f9e59859e498953cf)


添加本地视频


![](https://cofile.eeo.cn/res-store%2F3540f288af49394883b7d37a8ec406245e78552fc6e5efb6057d6faf6124f27d_186534?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=4dd7147431f7bab55008c6cb7e8404a82ce15bcf)


### 2.3 调整视频尺寸


选中视频后拖拽视频边缘调整视频尺寸


![](https://cofile.eeo.cn/res-store%2F987b09438d1b46f52d2ef266bc8dbfdee3954d341189c00945921eb767a2f953_212399?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=df931355a7c20193ef06da44a17b557f20e05bda)


## （3）添加推流地址


打开obs设置


![](https://cofile.eeo.cn/res-store%2Fac2ff9ee7d949e08ef2a6ce9aa98ca85f348629ed3ba22969b8a15d76566b5b7_435761?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=c0ca39d01d340706fcb81e0394481550f613c645)


进入推流栏目，将服务类型改为自定义


![](https://cofile.eeo.cn/res-store%2F9da537d3e76031368feac64b8f6083600500ca4e6935a9803cc1c912597641f6_79701?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=9f68316f5791c5615b25bf7a2c4a15f522f77d24)


添加服务器地址和串流密钥


完整推流地址样式：rtmp://livepush.eeo.cn/classlive/3786113a1b9e9ed9d1aa_406b449dd48bccac？txSecret=e7dd199f9e005588e3402cd33a97d2c4&txTime=7d8d37cd&record=mp4&record_interval=7200


温馨提示：上方样式中，黄色部分添加到【服务器】栏目中，红色部分添加到【串流密钥】中


![](https://cofile.eeo.cn/res-store%2F73a385c50c97a265d64374775c271446e6085b1b927254f9c428bce3240035ef_75019?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=facac4e656257caf697772a8f0e344598bd004ac)


## （4）开始推流


点击开始推流后，用户使用观看链接就能看到画面了


![](https://cofile.eeo.cn/res-store%2Fd3f51a137f55f4759c37d89c50f339b9e111a068a9b9a05e4d52142525959cca_147765?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=57a2addc6757d3eb15bbed489976defc1bfbbd44)


## （5）开始播放视频


选中要播放的视频，点击播放


![](https://cofile.eeo.cn/res-store%2F95fe97617af4125333aa61768b947e319ea7310e78d954d48129c6841430f752_230109?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=427d37ceeb48757694a272b58b82db05f8b82f88)


## （6）如何停止


当直播需要停止时，点击停止推流


![](https://cofile.eeo.cn/res-store%2Fef294202c458244c6667fd2756ce5376f04fae51dcda1f2dff0655517f90df0f_218327?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=f2d57f066c5e143e6aca05221263da94d01e6124)


# 二、教室虚拟直播


![](https://cofile.eeo.cn/res-store%2Fb49cb27402d6ed0c7ff69c3a16c5aa5c356dc8cb9386b7b6403d0e1c624bfb3a_656583?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=65d9130cc49cf8fa9d392ddc21cc224f0e2f0225)


### 2.2 场景添加本地视频


![](https://cofile.eeo.cn/res-store%2Fc4c78952a237cc9fa3b48f78634070a198aa612c93b25d6937929ff3cabf5652_181307?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=b0cdc3ad4a71c2bfbf3a882710be7beb8cc764ba)


### 2.4 打开媒体源本地声音


将媒体源的监听模式切换为“监听并输出”


![](https://cofile.eeo.cn/res-store%2F06be219db4a72da8a9dbbaf566621a0da2da388fd01c797664f5375dfa3fa70a_184235?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=811478b1a3aedf50252c5ddc202d12e02bd7da50)


## （3）开启虚拟摄像机功能


在obs中开启虚拟摄像机功能


![](https://cofile.eeo.cn/res-store%2Fa3f52d82392c0a6d4707cddaad45fe8d8aa03a584277f5af73aeddf617972635_200688?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=b057659eb82d0f8dbe4e789f9e59859e498953cf)


## （4）安装虚拟麦克风软件


安装虚拟麦克风软件 → 点击下载安装


温馨提示：安装后，必须重启电脑才能完成安装


![](https://cofile.eeo.cn/res-store%2F3540f288af49394883b7d37a8ec406245e78552fc6e5efb6057d6faf6124f27d_186534?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=4dd7147431f7bab55008c6cb7e8404a82ce15bcf)


## （5）隐藏教室座位席


进入教室设置，在常规栏目中，座位席区域勾选隐藏


![](https://cofile.eeo.cn/res-store%2Ff8530c90d3f3b79b7c96c2a77f8c45d1c3b6682f5672797bf5b166b57e48d30e_197317?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=25747c64b51d16e890b8fa77fcfaf8460e53dc16)


## （6）教室设置摄像头与麦克风


在教室中打开摄像头和麦克风，然后将麦克风选为VoiceMeeter开头的设备上，将摄像头选为OBS开头的设备上，然后双击已打开的摄像头放到最大


![](https://cofile.eeo.cn/res-store%2F8834be0335adb35caf2355327f4ac7c48a52d39fdc6f535674a69b9f31b2c335_343740?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=dedbefe563df8eadc99b59416d82e46a3200deee)


## （7）开始播放视频


再次跳转到obs中，选中视频后开始播放


温馨提示：电脑桌面不要播放任何其他声音，因为虚拟麦克风收取的是当前电脑桌面中的所有声音


![](https://cofile.eeo.cn/res-store%2F3cb129d8e16fb467ae4b6b9e4068249d9425e2887bd439a06d2ed4c84783a8bb_298218?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1791129600;1791734400&q-key-time=1791129600;1791734400&q-header-list=host&q-url-param-list=&q-signature=b1ac8736f9f2a3adc001bf94c54ff8a1a797da9f)
