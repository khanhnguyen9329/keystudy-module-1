let array = [
    ["vision", "https://cdn.honda.com.vn/motorbike-versions/December2020/osAEdqYtGQdNqAyZp64i.png", "15", "1500"],
    ["shViet", "https://img.tinxe.vn/resize/1000x-/2021/04/26/XForF7yt/honda-sh-125i-honda-sh-150i-2-d23c.png", "20", "4000"],
    ["air Blade", "https://autobikes.vn/stores/news_dataimages/nguyenthuy/112020/26/22/5322_Honda_Air_Blade_2021__2.png?rt=20201126225323", "30", "2500"],
    ["supperCup", "https://cdn.honda.com.vn/motorbikes/October2021/qdGgJvma2sfdCVaSKhaQ.png", "25", "4500"],
    ["wave", "https://kinhtechungkhoan.vn/stores/news_dataimages/nguyenthao/072022/21/08/3731-alpha120220721085017.2173900.jpg", "50", "1000"],
    ["lead125", "https://cdn.honda.com.vn/motorbikes/December2021/PxbOtPG619Vte84CQHPg.png", "15", "2000"],
    ["winnerX", "https://cdn.honda.com.vn/motorbike-versions/December2021/AjAslqMuYpko2d6wmuEs.png", "20", "2000"],
    ["pcx", "https://media.vov.vn/sites/default/files/styles/large/public/2020-11/1_194.jpg", "10", "2500"],
    ["sh mode", "https://vcdn-vnexpress.vnecdn.net/2021/12/12/sh-mode-vne-2021-2-1639287039-3459-1639287261.jpg", "30", "2500"],
    ["future 125", "https://img.websosanh.vn/v10/users/review/images/u33f6fmc6nk1b/honda-future-2021-cao-cap-3.jpg?compress=85", "30", "1500"]

]

    

let proIndex = -2
danhSachSanPham(array)
function danhSachSanPham(arr) {
        let str = ""
    for (let i = 0; i < arr.length; i++) {
        str += "<tr>" + "<td>" + arr[i][0] + "</td>"
            + " <td>" + "<img src='" + arr[i][1] + "' width='100' height='50'>" + "</td>"//hinh anh
            +"<td>" + arr[i][2] + "</td>"
            + "<td>" + arr[i][3] + "</td>"
            + "<td> <button  onclick='onedit(" + i + ")'>Edit</button> </td>"
            + "<td><button onclick='onDelete("+ i +")'>Dlete</button></td>"
            + "</tr>"
    }
    document.getElementById("hienThi").innerHTML = str
}
function themSp(){
    let tenXe = document.getElementById("tenXe").value;
    let hinhAnh = document.getElementById("hinhAnh").value;
    let soLuong = document.getElementById("soLuong").value;
    let giaNiemYet = document.getElementById("giaNiemYet").value;
    if(proIndex === -2){
        array.push([tenXe,hinhAnh,soLuong,giaNiemYet])
    }else {
        array[proIndex] = [tenXe,hinhAnh,soLuong,giaNiemYet] 
        proIndex = -2
    }
    
    danhSachSanPham(array)
    clear()
}
function clear(){
    document.getElementById("tenXe").value= ""
    document.getElementById("hinhAnh").value= ""
    document.getElementById("soLuong").value= ""
    document.getElementById("giaNiemYet").value= ""
}
function onDelete(index){
    array.splice(index,1)
    danhSachSanPham(array)
}
function onedit(index){
    proIndex = index
    document.getElementById("tenXe").value= array[index][0];
    document.getElementById("hinhAnh").value= array[index][1];
    document.getElementById("soLuong").value= array[index][2];
    document.getElementById("giaNiemYet").value= array[index][3];
    
}
function timkiem(){
   let timkiem = document.getElementById("timkiem").value;
   let kq = []
   for(let i = 0 ;i<array.length; i++){
       if(array[i][0].includes(timkiem) ){
           kq.push(array[i])
       }
   }
danhSachSanPham(kq)
  
}
