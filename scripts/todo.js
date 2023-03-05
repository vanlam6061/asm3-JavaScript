"use strict";

//1. người dùng thêm mới một todo list

//2.Tạo ra một class mới là task
// class này để chứa thông tin class
// class bao gôm:
// ask: Nội dung công việc.
// owner: username của người tạo ra task.
// isDone: Task này đã hoàn thành hay chưa.

//3. tạo một mảng todoArr để lưu trữ instances.

//4. Lưu các instances này xuống localStorage

//5.Mỗi khi người dùng nhấn vào nút để thêm mới một Todo

//6. bạn sẽ xử lý việc lấy dữ liệu từ Input, các trường thông tin sẽ như sau:
//task: được lấy từ thẻ input mà người dùng nhập vào.
// owner: Username sẽ lấy theo User hiện đang login vào hệ thống.
// isDone: Khi tạo mới thì mặc định là false.

//Sau đó, bạn sẽ thêm phần tử này vào todoArr và cập nhật xuống LocalStorage.

//b. Hiển thị các Task

// Bạn cần lấy dữ liệu từ LocalStorage và hiển thị ra theo như Template. Lưu ý: Bạn chỉ hiển thị các Task có owner trùng với username của người dùng hiện tại.

// c. Toggle Task

// Khi click vào một Task thì bạn có thể đánh dấu là Task đó đã hoàn thành hoặc chưa hoàn thành, dữ liệu này cũng được cập nhật vào LocalStorage tương ứng.

// d. Delete Task

// Khi click vào nút Delete ở bên cạnh các Task, xóa task tương ứng ra khỏi danh sách.

///
