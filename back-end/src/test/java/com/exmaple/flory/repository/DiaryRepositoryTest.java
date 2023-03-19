package com.exmaple.flory.repository;

import com.exmaple.flory.config.TestConfig;
import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.entity.Diary;
import com.exmaple.flory.entity.DiaryTeam;
import com.exmaple.flory.entity.Garden;
import com.exmaple.flory.entity.Member;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@Import(TestConfig.class)
@TestPropertySource("classpath:application-test.properties")
public class DiaryRepositoryTest {

    @Autowired
    DiaryRepository diaryRepository;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    GardenRepository gardenRepository;

    @Autowired
    DiaryTeamRepository diaryTeamRepository;

    private final Member member = Member
            .builder()
            .userId(1L)
            .email("ssafy@naver.com")
            .password("1234")
            .nickname("abcd")
            .build();

    private final Garden garden = Garden
            .builder()
            .member(member)
            .path("/usr/app")
            .build();

    private final DiaryDto diaryDto = DiaryDto.builder()
            .id(1L).content("content").imgSrc("imgSrc").lat(1).lng(1).publicStatus("전체공개").x("x").y("y").z("z")
            .build();

    @DisplayName("일기 등록하기 테스트")
    @Test
    public void insertDiaryTest() throws Exception{
        Diary diary = diaryRepository.save(diaryDto.toEntity());

        Optional<Diary> result = diaryRepository.findById(diary.getId());

        if(result.isEmpty()) throw new Exception();

        assertEquals(diary.getContent(),result.get().getContent());

    }

    @DisplayName("일기 삭제하기 테스트")
    @Test
    public void deleteDiaryTest(){
        Diary diary = diaryRepository.save(diaryDto.toEntity());

        diaryRepository.delete(diary);

        Optional<Diary> result = diaryRepository.findById(1L);

        assertEquals(result,Optional.empty());

    }

    @DisplayName("해당 정원의 일기 목록 조회 테스트")
    @Test
    public void getDiaryByGardenTest(){
        Member member1 = memberRepository.save(member);
        garden.setMember(member1);
        Garden garden1 = gardenRepository.save(garden);
        diaryDto.setGarden(garden1);

        diaryRepository.save(diaryDto.toEntity());
        List<DiaryDto> diaryDtoList = new ArrayList<>();

        diaryDtoList.add(diaryDto);

        List<Diary> diarylist = diaryRepository.findByGardenId(garden1.getId());

        assertEquals(diaryDtoList.size(),diarylist.size());
    }

    @DisplayName("유저의 일기 목록 조회 테스트")
    @Test
    public void getDiaryByUserTest(){
        Member member1 = memberRepository.save(member);
        garden.setMember(member1);
        Garden garden1 = gardenRepository.save(garden);
        diaryDto.setGarden(garden1);

        diaryRepository.save(diaryDto.toEntity());
        List<DiaryDto> diaryDtoList = new ArrayList<>();

        diaryDtoList.add(diaryDto);

        List<Diary> diarylist = diaryRepository.findByMemberId(member1.getUserId());

        assertEquals(diaryDtoList.size(),diarylist.size());
    }

    @DisplayName("좌표값으로 일기 조회 테스트")
    @Test
    public void getDiaryByLocationTest(){
        Member member1 = memberRepository.save(member);
        garden.setMember(member1);
        Garden garden1 = gardenRepository.save(garden);
        diaryDto.setGarden(garden1);

        Diary diary = diaryRepository.save(diaryDto.toEntity());

        Diary result = diaryRepository.findByXAndYAndZInGarden(garden1.getId(), "x","y","z");

        assertEquals(diary.getContent(),result.getContent());
    }

    @DisplayName("전체공개 정원 아이디로 조회 테스트")
    @Test
    public void getPublicDiaryByGardenIdTest(){
        Member member1 = memberRepository.save(member);
        garden.setMember(member1);
        Garden garden1 = gardenRepository.save(garden);
        diaryDto.setGarden(garden1);

        Diary diary = diaryRepository.save(diaryDto.toEntity());

        List<Diary> diaries = diaryRepository.findPublicByGardenId(diary.getGarden().getId());

        assertEquals(diary.getContent(),diaries.get(0).getContent());
    }

    @DisplayName("그룹공개 정원 아이디로 조회 테스트")
    @Test
    public void getMemberDiaryByGardenIdTest(){
        Member member1 = memberRepository.save(member);
        garden.setMember(member1);
        Garden garden1 = gardenRepository.save(garden);
        diaryDto.setGarden(garden1);
        diaryDto.setPublicStatus("그룹공개");

        Diary diary = diaryRepository.save(diaryDto.toEntity());

        List<Diary> diaries = diaryRepository.findTeamByGardenId(diary.getGarden().getId());

        assertEquals(diary.getContent(),diaries.get(0).getContent());
    }

    @DisplayName("유저 아이디로 전체공개 일기 조회 테스트")
    @Test
    public void getPublicDiaryByMemberIdTest(){
        Member member1 = memberRepository.save(member);
        garden.setMember(member1);
        Garden garden1 = gardenRepository.save(garden);
        diaryDto.setGarden(garden1);

        Diary diary = diaryRepository.save(diaryDto.toEntity());

        List<Diary> diaries = diaryRepository.findPublicByMemberId(member1.getUserId());

        assertEquals(diary.getContent(),diaries.get(0).getContent());
    }

    @DisplayName("유저 아이디로 그룹공개 일기 조회 테스트")
    @Test
    public void getTeamDiaryByMemberIdTest(){
        Member member1 = memberRepository.save(member);
        garden.setMember(member1);
        Garden garden1 = gardenRepository.save(garden);
        diaryDto.setGarden(garden1);
        diaryDto.setPublicStatus("그룹공개");

        Diary diary = diaryRepository.save(diaryDto.toEntity());

        List<Diary> diaries = diaryRepository.findTeamByMemberId(member1.getUserId());

        assertEquals(diary.getContent(),diaries.get(0).getContent());
    }

    @DisplayName("지도 좌표로 일기 조회 테스트")
    @Test
    public void getDiaryInMapTest(){
        Member member1 = memberRepository.save(member);
        garden.setMember(member1);
        Garden garden1 = gardenRepository.save(garden);
        diaryDto.setGarden(garden1);

        Diary diary = diaryRepository.save(diaryDto.toEntity());

        List<Diary> result = diaryRepository.findDiaryInMap(11,0,0,11);

        assertEquals(diary.getContent(),result.get(0).getContent());
    }

    @DisplayName("해당 월의 일기 목록 가졍오기 테스트")
    @Test
    public void getDiaryInMonthTest(){
        Member member1 = memberRepository.save(member);
        garden.setMember(member1);
        Garden garden1 = gardenRepository.save(garden);
        diaryDto.setGarden(garden1);

        Diary diary = diaryRepository.save(diaryDto.toEntity());

        List<Diary> result = diaryRepository.findDiaryInMonth(member1.getUserId(),diary.getCreatedTime(),new Date());

        assertEquals(diary.getContent(),result.get(0).getContent());
    }

    @DisplayName("일기의 그룹 가져오기 테스트")
    @Test
    public void getGroupListTest(){
        Member member1 = memberRepository.save(member);
        garden.setMember(member1);
        Garden garden1 = gardenRepository.save(garden);
        diaryDto.setGarden(garden1);

        Diary diary = diaryRepository.save(diaryDto.toEntity());

        DiaryTeam diaryTeam = DiaryTeam.builder()
                .diaryId(diary.getId()).groupId(1L).build();

        diaryTeamRepository.save(diaryTeam);

        List<Long> result = diaryTeamRepository.getGroup(diary.getId());

        assertEquals(1L,result.get(0));
    }
}
