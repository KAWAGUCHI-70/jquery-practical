$(function () {
  //slickを利用してカルーセルを実装する
  $(".slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    speed: 1500,
    pauseOnHover: false,
  });

  //リンクのホバー時に府透明度をアニメーションで変更する
  $("a, .item img").hover(
    function () {
      $(this).animate({ opacity: 0.6 }, 300);
    },
    function () {
      $(this).animate({ opacity: 1.0 }, 300);
    },
  );

  //100pxを境にTOｐに戻るボタンの表示・非表示を切り替える
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#page-top").fadeIn();
    } else {
      $("#page-top").fadeOut();
    }
  });

  //ページ内リンクのスクロールを滑らかにする（スムーズスクロール）
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr("href");

    let $target;
    if (href == "#") {
      $target = $("html");
    } else {
      $target = $(href);
    }

    const position = $target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  //スクロールした時にセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $("section").each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass("fade-in");
      }
    });
  });

  //worksの画像をクリックしたときにモーダルで拡大表示する
  $(".works img").click(function () {
    const imgSrc = $(this).attr("src");
    const imgAlt = $(this).attr("alt");
    $(".big-img").attr({
      src: imgSrc,
      alt: imgAlt,
    });
    $(".modal").fadeIn();
  });

  //閉じるボタンを9クリックしたときにモーダルを閉じる
  $(".close-btn").click(function () {
    $(".modal").fadeOut();
  });
});
