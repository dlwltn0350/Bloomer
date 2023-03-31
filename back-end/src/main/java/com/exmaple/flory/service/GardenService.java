package com.exmaple.flory.service;

import com.exmaple.flory.dto.garden.GardenRequestDto;
import com.exmaple.flory.dto.garden.GardenResponseDto;
import com.exmaple.flory.entity.Garden;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.exception.CustomException;
import com.exmaple.flory.exception.error.ErrorCode;
import com.exmaple.flory.repository.GardenRepository;
import com.exmaple.flory.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Service
public class GardenService {

    private final GardenRepository gardenRepository;
    private final MemberRepository memberRepository;

    public GardenResponseDto getDetail(Long id) {

        return gardenRepository.findById(id)
                .map(Garden::toResponseDto)
                .orElseThrow(()-> new CustomException(ErrorCode.INVALID_GARDEN));
    }

    public GardenResponseDto insert(GardenRequestDto gardenRequestDto) {

        Long memberId = gardenRequestDto.getUserId();

        Optional<Member> result = memberRepository.findById(memberId);

        //계정이 없다면
        if(!result.isPresent()) {
            throw new CustomException(ErrorCode.NO_USER);
        }

        LocalDateTime today = LocalDateTime.now();

        Garden garden = new Garden();
        garden.setMember(result.get());

        LocalDateTime nxtMonth = LocalDateTime.of(today.getYear(),
                today.getMonthValue()+1,
                1,
                0,
                0,
                0);

        LocalDateTime deadLine = nxtMonth.minusSeconds(1);

        //마감날짜세팅
        garden.setDeadLine(deadLine);
        garden.setType(gardenRequestDto.getType());
        Garden res = gardenRepository.save(garden);

        return res.toResponseDto();
    }

    public GardenResponseDto update(GardenRequestDto gardenRequestDto) {

        log.info(" user id  {}",gardenRequestDto.getUserId());

        return gardenRepository.findById(gardenRequestDto.getGardenId())
                .map(g -> {
                    g.setPath(gardenRequestDto.getImgSrc());
                    return g;
                })
                .map(gardenRepository::save)
                .map(Garden::toResponseDto)
                .orElseThrow(()-> new CustomException(ErrorCode.INVALID_GARDEN));
    }

    public void delete(Long garden_id) {

        gardenRepository.findById(garden_id).orElseThrow(() -> new CustomException(ErrorCode.INVALID_GARDEN));
        gardenRepository.deleteById(garden_id);
    }

    public GardenResponseDto getGardenByMonth(Long user_id,Integer year,Integer month) {

        return gardenRepository.findByDate(user_id,year,month)
                .map(Garden::toResponseDto)
                .orElseThrow(()-> new CustomException(ErrorCode.INVALID_GARDEN));
    }

    public List<GardenResponseDto> getAllGardenByUserId(Long userId) {

        return gardenRepository.findAllByUserId(userId)
                .stream()
                .map(Garden::toResponseDto)
                .collect(Collectors.toList());
    }
}
