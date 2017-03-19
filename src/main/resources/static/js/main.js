function defineSizes() {
    $(".form_container .slide").each(function (i, n) {
        $(n).css({"background-image": "url(" + $(n).data("background") + ")"})
    }), $(".form_container .slideContainer").css({"margin-left": -(indicador * $(".form_container").width()) + "px"})
}
function moveSlider(i) {
    var n = $(".form_container .slide").length;
    indicador = "right" == i ? indicador + 1 : indicador - 1, indicador = indicador >= n ? 0 : indicador, indicador = indicador < 0 ? n - 1 : indicador, $(".form_container .slideContainer").animate({"margin-left": -(indicador * $(".form_container").width()) + "px"})
}
var indicador = 0;
$(document).on("ready", function () {
    function i() {
        intv = setInterval(function () {
            $(".right").click()
        }, 3e3)
    }

    $(".left").on("click", function (i) {
        i.preventDefault(), moveSlider("left")
    }), $(".right").on("click", function (i) {
        i.preventDefault(), moveSlider("right")
    }), i(), $(".form_container").hover(function (n) {
        "mouseenter" == n.type ? clearInterval(intv) : i()
    }), defineSizes()
}), $(window).on("resize", defineSizes);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZGVmaW5lU2l6ZXMiLCIkIiwiZWFjaCIsImkiLCJlbCIsImNzcyIsImJhY2tncm91bmQtaW1hZ2UiLCJkYXRhIiwibWFyZ2luLWxlZnQiLCJpbmRpY2Fkb3IiLCJ3aWR0aCIsIm1vdmVTbGlkZXIiLCJkaXJlY2Npb24iLCJsaW1pdGUiLCJsZW5ndGgiLCJhbmltYXRlIiwiZG9jdW1lbnQiLCJvbiIsImhvdmVyIiwiYXV0byIsImludHYiLCJzZXRJbnRlcnZhbCIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsImNsZWFySW50ZXJ2YWwiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJBQXlCQSxRQUFTQSxlQUNMQyxFQUFFLDBCQUEwQkMsS0FBSyxTQUFTQyxFQUFHQyxHQUN6Q0gsRUFBRUcsR0FBSUMsS0FDRkMsbUJBQW9CLE9BQVNMLEVBQUVHLEdBQUlHLEtBQUssY0FBZ0IsUUFLaEVOLEVBQUUsbUNBQW1DSSxLQUNqQ0csZ0JBQWlCQyxVQUFZUixFQUFFLG1CQUFtQlMsU0FBVyxPQUlyRSxRQUFTQyxZQUFXQyxHQUNoQixHQUFJQyxHQUFTWixFQUFFLDBCQUEwQmEsTUFDekNMLFdBQTBCLFNBQWJHLEVBQXdCSCxVQUFZLEVBQUlBLFVBQVksRUFDakVBLFVBQWFBLFdBQWFJLEVBQVUsRUFBSUosVUFDeENBLFVBQWFBLFVBQVksRUFBS0ksRUFBUyxFQUFJSixVQUMzQ1IsRUFBRSxtQ0FBbUNjLFNBQ2pDUCxnQkFBaUJDLFVBQVlSLEVBQUUsbUJBQW1CUyxTQUFXLE9BNUNyRSxHQUFJRCxXQUNKUixDQWdCSUEsR0FBRWUsVUFBQUMsR0FBQSxRQUFtQkMsV0FOckIsUUFBU0MsS0FDTEMsS0FBT0MsWUFBWSxXQUNmcEIsRUFBRSxVQUFVcUIsU0FDYixLQVpQckIsRUFBRSxTQUFTZ0IsR0FBRyxRQUFTLFNBQVNNLEdBQzVCQSxFQUFFQyxpQkFDRmIsV0FBVyxVQUVmVixFQUFFLFVBQVVnQixHQUFHLFFBQVMsU0FBU00sR0FDN0JBLEVBQUVDLGlCQUNGYixXQUFXLFdBUWZRLElBQ0FsQixFQUFFLG1CQUFtQmlCLE1BQU0sU0FBU0ssR0FDdEIsY0FBVkEsRUFBRUUsS0FBdUJDLGNBQWNOLE1BQVFELE1BRW5EbkIsZ0JBR0pDLEVBQUUwQixRQUFRVixHQUFHLFNBQVVqQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGluZGljYWRvciA9IDA7XHJcbiQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmxlZnQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIG1vdmVTbGlkZXIoJ2xlZnQnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnJpZ2h0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBtb3ZlU2xpZGVyKCdyaWdodCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYXV0bygpIHtcclxuICAgICAgICBpbnR2ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5yaWdodCcpLmNsaWNrKCk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbiAgICBhdXRvKCk7IC8vIHN0YXJ0XHJcbiAgICAkKCcuZm9ybV9jb250YWluZXInKS5ob3ZlcihmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS50eXBlID09ICdtb3VzZWVudGVyJyA/IGNsZWFySW50ZXJ2YWwoaW50dikgOiBhdXRvKCk7XHJcbiAgICB9KTtcclxuICAgIGRlZmluZVNpemVzKCk7XHJcbn0pO1xyXG5cclxuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBkZWZpbmVTaXplcyk7XHJcblxyXG5mdW5jdGlvbiBkZWZpbmVTaXplcygpIHtcclxuICAgICQoJy5mb3JtX2NvbnRhaW5lciAuc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGksIGVsKSB7XHJcbiAgICAgICAgJChlbCkuY3NzKHtcclxuICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyAkKGVsKS5kYXRhKCdiYWNrZ3JvdW5kJykgKyAnKScsXHJcbiAgICAgICAgICAgIC8vICdoZWlnaHQnOiAoJCgnLmZvcm1fY29udGFpbmVyJykud2lkdGgoKSAqIDAuNzUpICsgJ3B4JyxcclxuICAgICAgICAgICAgLy8gJ3dpZHRoJzogKCQoJy5mb3JtX2NvbnRhaW5lcicpLndpZHRoKCkpICsgJ3B4J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuZm9ybV9jb250YWluZXIgLnNsaWRlQ29udGFpbmVyJykuY3NzKHtcclxuICAgICAgICAnbWFyZ2luLWxlZnQnOiAtKGluZGljYWRvciAqICQoJy5mb3JtX2NvbnRhaW5lcicpLndpZHRoKCkpICsgJ3B4J1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZVNsaWRlcihkaXJlY2Npb24pIHtcclxuICAgIHZhciBsaW1pdGUgPSAkKCcuZm9ybV9jb250YWluZXIgLnNsaWRlJykubGVuZ3RoO1xyXG4gICAgaW5kaWNhZG9yID0gKGRpcmVjY2lvbiA9PSAncmlnaHQnKSA/IGluZGljYWRvciArIDEgOiBpbmRpY2Fkb3IgLSAxO1xyXG4gICAgaW5kaWNhZG9yID0gKGluZGljYWRvciA+PSBsaW1pdGUpID8gMCA6IGluZGljYWRvcjtcclxuICAgIGluZGljYWRvciA9IChpbmRpY2Fkb3IgPCAwKSA/IGxpbWl0ZSAtIDEgOiBpbmRpY2Fkb3I7XHJcbiAgICAkKCcuZm9ybV9jb250YWluZXIgLnNsaWRlQ29udGFpbmVyJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgJ21hcmdpbi1sZWZ0JzogLShpbmRpY2Fkb3IgKiAkKCcuZm9ybV9jb250YWluZXInKS53aWR0aCgpKSArICdweCdcclxuICAgIH0pXHJcbn0iXX0=
