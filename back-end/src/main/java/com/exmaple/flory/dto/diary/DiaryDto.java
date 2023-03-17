package com.exmaple.flory.dto.diary;

import com.exmaple.flory.dto.comment.CommentListDto;
import com.exmaple.flory.dto.flower.FlowerEmotionDto;
import com.exmaple.flory.entity.Diary;
import com.exmaple.flory.entity.Garden;
import com.exmaple.flory.entity.Music;
import com.exmaple.flory.entity.Team;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Slf4j
public class DiaryDto {
    private Long id;

    private String content;

    private String imgSrc;

    private double lat;

    private double lng;

    private String publicStatus;

    private String x;

    private String y;

    private String z;

    private String address;

    private Date createdTime;

    private Garden garden;

    private FlowerEmotionDto flowerEmotion;

    private List<Team> groupList;

    private Music music;

    private List<CommentListDto> commentList;

    public Diary toEntity(){
        return Diary.builder()
                .id(id).content(content).imgSrc(imgSrc).lat(lat).lng(lng).publicStatus(publicStatus).x(x).y(y).z(z).createdTime(createdTime)
                .garden(garden).address(address).build();
    }

}
