
Page({
    /**
     * 页面的初始数据
     */
    data: {
        activeInfoIndex: 0,
        isShowContent: false, // 只显示详情
        imgs: [
            {
                img: "https://img.alicdn.com/imgextra/i2/2670771506/TB2FnJMb3kLL1JjSZFpXXa7nFXa_!!2670771506.jpg_430x430q90.jpg"
            },
            {
                img: "https://img.alicdn.com/imgextra/i4/2670771506/TB2ZizNaMsSMeJjSspcXXXjFXXa_!!2670771506.jpg_430x430q90.jpg"
            }
        ],
        info: [
            {
                title: "商品详情",
                content: `<div class="content ke-post" style="height: auto;"><p>仅供测试使用，如有侵权请联系作者删除</p><br><img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2cMmki_vI8KJjSspjXXcgjXXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2qOvOhP3z9KJjy0FmXXXiwXXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i1/2670771506/TB2wMSei2DH8KJjy1XcXXcpdXXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i4/2670771506/TB2_ZtZi4rI8KJjy0FpXXb5hVXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2PzxVi4HI8KJjy1zbXXaxdpXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i4/2670771506/TB2Zdysi_nI8KJjy0FfXXcdoVXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i4/2670771506/TB2YH8qi3vD8KJjSsplXXaIEFXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i1/2670771506/TB28V8Ci_nI8KJjSszgXXc8ApXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2.LVNi9_I8KJjy0FoXXaFnVXa_!!2670771506.jpg" class="img-ks-lazyload"><br></div>`
            },
            {
                title: "智能功能",
                content: `<div class="content ke-post" style="height: auto;"><p>仅供测试使用，如有侵权请联系作者删除</p><br><img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2cMmki_vI8KJjSspjXXcgjXXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2qOvOhP3z9KJjy0FmXXXiwXXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i1/2670771506/TB2wMSei2DH8KJjy1XcXXcpdXXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i4/2670771506/TB2_ZtZi4rI8KJjy0FpXXb5hVXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2PzxVi4HI8KJjy1zbXXaxdpXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i4/2670771506/TB2Zdysi_nI8KJjy0FfXXcdoVXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i4/2670771506/TB2YH8qi3vD8KJjSsplXXaIEFXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i1/2670771506/TB28V8Ci_nI8KJjSszgXXc8ApXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2.LVNi9_I8KJjy0FoXXaFnVXa_!!2670771506.jpg" class="img-ks-lazyload"><br></div>`
            },
            {
                title: "产品参数",
                content: `
                    <div class="content ke-post" style="height: auto;"><p>仅供测试使用，如有侵权请联系作者删除</p><br><img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2cMmki_vI8KJjSspjXXcgjXXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2qOvOhP3z9KJjy0FmXXXiwXXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i1/2670771506/TB2wMSei2DH8KJjy1XcXXcpdXXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i4/2670771506/TB2_ZtZi4rI8KJjy0FpXXb5hVXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2PzxVi4HI8KJjy1zbXXaxdpXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i4/2670771506/TB2Zdysi_nI8KJjy0FfXXcdoVXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i4/2670771506/TB2YH8qi3vD8KJjSsplXXaIEFXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i1/2670771506/TB28V8Ci_nI8KJjSszgXXc8ApXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2.LVNi9_I8KJjy0FoXXaFnVXa_!!2670771506.jpg" class="img-ks-lazyload"><br></div>
                    `
            },
            {
                title: "注意事项",
                content: `
                <div class="content ke-post" style="height: auto;"><p>仅供测试使用，如有侵权请联系作者删除</p><br><img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2cMmki_vI8KJjSspjXXcgjXXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2qOvOhP3z9KJjy0FmXXXiwXXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i1/2670771506/TB2wMSei2DH8KJjy1XcXXcpdXXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i4/2670771506/TB2_ZtZi4rI8KJjy0FpXXb5hVXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2PzxVi4HI8KJjy1zbXXaxdpXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i4/2670771506/TB2Zdysi_nI8KJjy0FfXXcdoVXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i4/2670771506/TB2YH8qi3vD8KJjSsplXXaIEFXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i1/2670771506/TB28V8Ci_nI8KJjSszgXXc8ApXa_!!2670771506.jpg" class="img-ks-lazyload"><br> <img style="width: 100%; margin: 10px auto;" src="https://img.alicdn.com/imgextra/i3/2670771506/TB2.LVNi9_I8KJjy0FoXXaFnVXa_!!2670771506.jpg" class="img-ks-lazyload"><br></div>`
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.touchStartPosition = 0;
        this.touchEndPosition = 0;

        this.isScroll = false;
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {},

    listenScroll: function(e) {
        var top = e.detail.scrollTop;
        // console.log(e.detail.scrollTop);
        if (top <= 0) {
            this.setData({
                isShowContent: false
            });
        } else {
            this.isScroll = true;
            this.setData({
                isShowContent: true
            });
        }
    },
    changeSwiper: function(e) {
        var { index } = e.currentTarget.dataset;
        this.setData({
            activeInfoIndex: index
        });
    },
    swipeSwiper: function(e) {
        var { current } = e.detail;
        this.setData({
            activeInfoIndex: current
        });
    },
    touchstart: function(e) {
        this.touchStartPosition = e.changedTouches[0].clientY;
        console.log("------- start ------");
        console.log(e);
        console.log(this.touchStartPosition);
        console.log(e.changedTouches[0].clientY);
    },
    touchmove: function(e) {},
    touchend: function(e) {
        console.log("------- this.isScroll ------");
        console.log(this.isScroll);
        if (!this.isScroll) {
            this.touchEndPosition = e.changedTouches[0].clientY;
            console.log("------- end ------");
            console.log(e);
            console.log(this.touchEndPosition);
            console.log(e.changedTouches[0].clientY);

            var distance = this.touchEndPosition - this.touchStartPosition;

            console.log("------- distance ------");
            console.log(distance);
            if (distance > 50) {
                this.setData({
                    isShowContent: false
                });
            } else if (distance < 50) {
                this.setData({
                    isShowContent: true
                });
            }
        }

        this.isScroll = false;
    },
});
