package com.project.fri.room.service;

import com.project.fri.common.entity.Category;
import com.project.fri.room.dto.FindAllRoomResponse;
import com.project.fri.room.entity.Room;
import java.util.List;

import com.project.fri.room.dto.CreateRoomRequest;
import com.project.fri.room.dto.CreateRoomResponse;

/**
 * packageName    : com.project.fri.room.service fileName       : RoomService date           :
 * 2023-04-18 description    :
 */
public interface RoomService {

  /**
   * 방 생성
   * @param request
   * @return 만든 방 제목
   */
  CreateRoomResponse createRoom(CreateRoomRequest request);

  /**
   * desc: 전체 방 리스트를 조회, area에 따라 해당 지역의 방 리스트를 조회한다.
   * @param areaString
   * @return 카테고리 별로 묶여있는 전체 방 리스트
   */
  FindAllRoomResponse findAllByArea(Category areaString);
}
