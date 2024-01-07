import React from 'react';
import Pict from './Assets/Pict.png'

const HeroSection = () => {
    return (
        <section className={'hero-section'}>
            <div className={'container'}>
                <h3 className={'heroDots'}>
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="black"/>
                    </svg>
                    JERSEY
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="black"/>
                    </svg>
                    NIKI & NBA COLABARATION
                </h3>
                <h1>
                    JERSEY
                    <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M99.5255 57.9848L110.902 59.7957L110.623 61.5496L99.372 68.3131L109.295 69.8926L109.091 71.1725L97.7145 69.3616L97.9937 67.6076L109.245 60.8442L99.3217 59.2647L99.5255 57.9848Z" fill="black"/>
                        <path d="M96.8655 71.2706L107.558 75.5591L107.069 76.7768L96.3771 72.4883L96.8655 71.2706Z" fill="black"/>
                        <path d="M95.4583 75.9468L104.921 82.5175L104.172 83.5952L99.98 80.684L97.8627 83.733L99.6093 90.1662L98.6602 91.533L98.6471 91.5239L96.676 84.2919L89.2019 84.9846L89.1887 84.9755L90.147 83.5955L96.7851 82.9846L98.9023 79.9356L94.71 77.0245L95.4583 75.9468Z" fill="black"/>
                        <path d="M87.8144 86.7772L94.8601 95.8914L86.5434 102.321L85.7507 101.295L93.0421 95.6587L90.7131 92.646L84.8522 97.1767L84.0497 96.1387L89.9107 91.6079L87.5817 88.5952L80.2903 94.2317L79.4977 93.2064L87.8144 86.7772Z" fill="black"/>
                        <path d="M74.0654 100.315L74.4229 101.578L68.4191 103.278L68.0616 102.016L74.0654 100.315Z" fill="black"/>
                        <path d="M59.4402 99.4717L58.0672 110.91L56.3038 110.698L49.1137 99.7146L47.9161 109.691L46.6293 109.536L48.0024 98.0986L49.7657 98.3103L56.9559 109.294L58.1535 99.3172L59.4402 99.4717Z" fill="black"/>
                        <path d="M46.3303 97.8425L41.4117 108.26L33.1792 104.373C32.697 104.145 32.3667 103.783 32.1885 103.286C32.0103 102.789 32.0351 102.299 32.2628 101.817L33.308 99.603C33.3717 99.468 33.4548 99.3421 33.5571 99.2253C33.6453 99.1135 33.7456 99.0135 33.8581 98.925C33.7962 98.5065 33.7669 98.1565 33.7701 97.8749C33.7733 97.5933 33.8318 97.332 33.9456 97.0908L35.0933 94.6601C35.321 94.1779 35.6834 93.8476 36.1804 93.6694C36.6774 93.4912 37.167 93.516 37.6493 93.7437L46.3303 97.8425ZM44.0407 98.1947L37.0959 94.9156C36.9416 94.8428 36.7863 94.8343 36.6301 94.8903C36.4598 94.9514 36.3381 95.0591 36.2653 95.2135L35.1176 97.6442C35.0447 97.7985 35.0411 97.956 35.1068 98.1168C35.1582 98.2826 35.2611 98.402 35.4154 98.4748L42.3602 101.754C42.5146 101.827 42.6769 101.833 42.8473 101.772C43.0035 101.716 43.118 101.61 43.1909 101.456L44.3386 99.0254C44.4115 98.871 44.4222 98.7109 44.3707 98.5451C44.3051 98.3843 44.1951 98.2675 44.0407 98.1947ZM41.8069 102.926L35.3106 99.8585C35.1563 99.7857 35.001 99.7772 34.8448 99.8332C34.6841 99.8989 34.5673 100.009 34.4944 100.163L33.4492 102.377C33.3763 102.531 33.3679 102.686 33.4239 102.843C33.4753 103.009 33.5782 103.128 33.7326 103.201L40.2289 106.268C40.3832 106.341 40.5455 106.347 40.7159 106.286C40.8721 106.23 40.9867 106.124 41.0595 105.97L42.1047 103.757C42.1776 103.602 42.1883 103.442 42.1369 103.276C42.0712 103.115 41.9612 102.999 41.8069 102.926Z" fill="black"/>
                        <path d="M34.4552 92.1861L27.8418 99.1448C27.4744 99.5314 27.0268 99.7314 26.499 99.7448C25.9712 99.7582 25.514 99.5812 25.1274 99.2138L19.5605 93.9231C19.1739 93.5557 18.9739 93.1081 18.9605 92.5803C18.947 92.0525 19.124 91.5953 19.4914 91.2087L26.1048 84.25L27.0442 85.1428L24.1454 88.1931L30.6169 94.3435L33.5158 91.2933L34.4552 92.1861ZM29.7241 95.2829L23.2526 89.1325L20.4308 92.1015C20.3133 92.2252 20.2605 92.3737 20.2724 92.5469C20.2693 92.7205 20.3296 92.8661 20.4533 92.9837L26.0202 98.2744C26.1439 98.392 26.2963 98.4485 26.4772 98.4439C26.6431 98.4396 26.7848 98.3757 26.9024 98.252L29.7241 95.2829Z" fill="black"/>
                        <path d="M18.4157 79.9553L17.2171 80.4888L14.6795 74.7881L15.8781 74.2546L18.4157 79.9553Z" fill="black"/>
                        <path d="M17.164 65.57L5.64704 65.8367L5.60592 64.0612L15.4556 55.3828L5.41029 55.6155L5.38028 54.3198L16.8972 54.0531L16.9383 55.8286L7.08864 64.507L17.1339 64.2743L17.164 65.57Z" fill="black"/>
                        <path d="M17.407 51.7915L6.12532 49.4605L6.3908 48.1756L17.6725 50.5066L17.407 51.7915Z" fill="black"/>
                        <path d="M17.9609 46.9241L7.48949 42.1221L8.03639 40.9295L12.6758 43.0571L14.2231 39.6829L11.3711 33.6577L12.0648 32.1451L12.0793 32.1518L15.293 38.9238L22.5283 36.926L22.5429 36.9326L21.8426 38.4597L15.4157 40.2298L13.8684 43.604L18.5078 45.7315L17.9609 46.9241Z" fill="black"/>
                        <path d="M23.5716 34.9166L15.0502 27.1644L22.124 19.3886L23.0827 20.2607L16.881 27.0779L19.6978 29.6404L24.6828 24.1606L25.6533 25.0435L20.6683 30.5233L23.4851 33.0858L29.6868 26.2686L30.6454 27.1407L23.5716 34.9166Z" fill="black"/>
                        <path d="M34.6097 19.2332L34.0363 18.0531L39.6489 15.3262L40.2223 16.5062L34.6097 19.2332Z" fill="black"/>
                        <path d="M48.8722 17.4585L48.2058 5.95778L49.9789 5.85505L58.9939 15.3976L58.4127 5.36638L59.7065 5.29141L60.3729 16.7921L58.5999 16.8949L49.5848 7.35235L50.166 17.3835L48.8722 17.4585Z" fill="black"/>
                        <path d="M62.3568 16.6896L65.37 5.57065L74.157 7.95189C74.6718 8.09139 75.0605 8.39013 75.3232 8.84811C75.5859 9.3061 75.6475 9.79247 75.508 10.3072L74.8677 12.67C74.8286 12.8142 74.769 12.9527 74.6887 13.0857C74.6216 13.2112 74.5404 13.3273 74.4451 13.4341C74.5796 13.8352 74.6699 14.1747 74.7162 14.4524C74.7625 14.7302 74.7508 14.9978 74.681 15.2552L73.9779 17.8496C73.8384 18.3644 73.5397 18.7531 73.0817 19.0158C72.6237 19.2785 72.1374 19.3401 71.6226 19.2006L62.3568 16.6896ZM64.5489 15.9409L71.9616 17.9497C72.1263 17.9943 72.2806 17.9754 72.4246 17.8928C72.5816 17.8028 72.6824 17.6754 72.7271 17.5106L73.4301 14.9162C73.4748 14.7515 73.4507 14.5958 73.3578 14.449C73.278 14.2948 73.1558 14.1954 72.9911 14.1507L65.5784 12.1419C65.4137 12.0973 65.2528 12.12 65.0958 12.2101C64.9519 12.2926 64.8576 12.4163 64.8129 12.581L64.1099 15.1754C64.0652 15.3402 64.0828 15.4996 64.1626 15.6539C64.2554 15.8006 64.3842 15.8963 64.5489 15.9409ZM65.9174 10.8911L72.8513 12.7701C73.016 12.8147 73.1704 12.7958 73.3143 12.7132C73.461 12.6204 73.5567 12.4916 73.6014 12.3269L74.2417 9.96407C74.2863 9.79935 74.2673 9.64502 74.1848 9.50108C74.105 9.34685 73.9828 9.24741 73.818 9.20277L66.8841 7.32372C66.7194 7.27908 66.5585 7.3018 66.4015 7.39186C66.2576 7.47442 66.1633 7.59806 66.1187 7.76279L65.4784 10.1256C65.4337 10.2903 65.4513 10.4498 65.531 10.604C65.6239 10.7507 65.7527 10.8464 65.9174 10.8911Z" fill="black"/>
                        <path d="M75.0672 20.1204L80.3682 12.1168C80.6627 11.6721 81.0687 11.3972 81.5861 11.2921C82.1035 11.187 82.5845 11.2817 83.0292 11.5762L89.4321 15.8171C89.8768 16.1116 90.1516 16.5176 90.2567 17.035C90.3618 17.5524 90.2671 18.0334 89.9726 18.4781L84.6715 26.4817L83.5911 25.7661L85.9147 22.2578L78.4713 17.3278L76.1477 20.8361L75.0672 20.1204ZM79.1869 16.2473L86.6303 21.1773L88.8921 17.7624C88.9864 17.6201 89.0125 17.4647 88.9706 17.2962C88.9435 17.1247 88.8588 16.9918 88.7165 16.8976L82.3135 12.6567C82.1713 12.5625 82.0114 12.5334 81.834 12.5694C81.6714 12.6025 81.543 12.6901 81.4487 12.8324L79.1869 16.2473Z" fill="black"/>
                        <path d="M93.162 29.4974L94.2505 28.7649L97.7342 33.9419L96.6457 34.6744L93.162 29.4974Z" fill="black"/>
                        <circle cx="58" cy="58" r="10" fill="#FB0223"/>
                    </svg>
                    NBA
                </h1>
                <div className={'small'}>
                <h5>
                    WHICHEVER
                    <span className={'blue'}>
                        NBA
                    </span>
                    <span className={'red'}>
                        TEAM
                    </span>
                    YOUR SUPPORT,GET YOUR JERSEY HERE TODAY.
                </h5>
            </div>
                <img src={Pict} alt=""/>
            </div>

        </section>
    );
};

export default HeroSection;