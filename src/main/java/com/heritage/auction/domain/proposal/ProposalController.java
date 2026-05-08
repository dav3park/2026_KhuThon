package com.heritage.auction.domain.proposal;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.heritage.auction.domain.proposal.dto.ProposalCreateRequest;
import com.heritage.auction.domain.proposal.dto.ProposalDto;
import com.heritage.auction.global.security.AuthenticatedUser;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ProposalController {

    private final ProposalService proposalService;

    @PostMapping("/api/proposals")
    @ResponseStatus(HttpStatus.CREATED)
    public ProposalDto create(@AuthenticationPrincipal AuthenticatedUser user,
                              @RequestBody ProposalCreateRequest request) {
        return proposalService.create(user.uid(), request);
    }

    @GetMapping("/api/admin/proposals")
    public List<ProposalDto> listByArtisan(@RequestParam Long artisanId) {
        return proposalService.findAllByArtisanId(artisanId);
    }
}
